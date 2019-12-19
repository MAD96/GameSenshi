import {
	CREATED_AT,
	UPDATED_AT,
	fbfsSettingsNotificationPath,
	FB_FS_SETTINGS_NOTIFICATION_EMAIL,
	FB_FS_SETTINGS_NOTIFICATION_EMAIL_ORDER_UPDATES,
	FB_FS_SETTINGS_NOTIFICATION_EMAIL_NEWS_LETTER,
	FB_FS_SETTINGS_NOTIFICATION_EMAIL_CHATS,
	FB_FS_SETTINGS_NOTIFICATION_EMAIL_COMMENTS,
	FB_FS_SETTINGS_NOTIFICATION_PUSH,
	FB_FS_SETTINGS_NOTIFICATION_PUSH_ORDER_UPDATES,
	FB_FS_SETTINGS_NOTIFICATION_PUSH_CHATS,
	FB_FS_SETTINGS_NOTIFICATION_PUSH_COMMENTS,
	fbfsSettingsGeneralPath,
	FB_FS_SETTINGS_GENERAL_DISPLAY_NAME,
	FB_FS_SETTINGS_GENERAL_SHORT_ID,
} from 'constantValues'
import nanoid from 'nanoid'
import { functions, firestore, getServerTimestamp } from './core'

const onUserCreate = (userRecord, eventContext, firestore) => {
	const { uid } = userRecord

	const isPasswordExist = userRecord.providerData.some(
		data => data.providerId === 'password'
	)

	const serverTimestamp = getServerTimestamp()

	const shortId = nanoid(10)

	if (!isPasswordExist) {
		firestore.doc(fbfsSettingsGeneralPath(uid)).set({
			[CREATED_AT]: serverTimestamp,
			[UPDATED_AT]: serverTimestamp,
			[FB_FS_SETTINGS_GENERAL_SHORT_ID]: shortId,
			[FB_FS_SETTINGS_GENERAL_DISPLAY_NAME]: userRecord.displayName || shortId,
		})
	}

	return firestore.doc(fbfsSettingsNotificationPath(uid)).set({
		[CREATED_AT]: serverTimestamp,
		[UPDATED_AT]: serverTimestamp,
		[FB_FS_SETTINGS_NOTIFICATION_EMAIL]: {
			[FB_FS_SETTINGS_NOTIFICATION_EMAIL_ORDER_UPDATES]: true,
			[FB_FS_SETTINGS_NOTIFICATION_EMAIL_CHATS]: true,
			[FB_FS_SETTINGS_NOTIFICATION_EMAIL_COMMENTS]: true,
			[FB_FS_SETTINGS_NOTIFICATION_EMAIL_NEWS_LETTER]: true,
		},
		[FB_FS_SETTINGS_NOTIFICATION_PUSH]: {
			[FB_FS_SETTINGS_NOTIFICATION_PUSH_ORDER_UPDATES]: true,
			[FB_FS_SETTINGS_NOTIFICATION_PUSH_CHATS]: true,
			[FB_FS_SETTINGS_NOTIFICATION_PUSH_COMMENTS]: true,
		},
	})
}

const onUserCreation = functions.auth
	.user()
	.onCreate((userRecord, eventContext) => {
		return onUserCreate(userRecord, eventContext, firestore)
	})

export { onUserCreation }
