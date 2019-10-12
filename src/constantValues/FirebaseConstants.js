const FB_STORAGE_USER_AVATAR = 'userAvatar'

const FB_AUTH_UID = 'uid'
const FB_FS_USER = 'users/'
const FB_FS_SETTINGS = 'settings/'
const fbfsSettingsNotification = user => {
	return (
		FB_FS_USER + user[FB_AUTH_UID] + '/' + FB_FS_SETTINGS + 'notifications/'
	)
}

const FB_FS_SETTINGS_NOTIFICATION_EMAIL = 'email'
const FB_FS_SETTINGS_NOTIFICATION_EMAIL_ORDER_UPDATES = 'orderUpdates'
const FB_FS_SETTINGS_NOTIFICATION_EMAIL_NEWS_LETTER = 'newsletter'
const FB_FS_SETTINGS_NOTIFICATION_EMAIL_CHATS = 'chats'
const FB_FS_SETTINGS_NOTIFICATION_EMAIL_COMMENTS = 'comments'
const FB_FS_SETTINGS_NOTIFICATION_PUSH = 'push'
const FB_FS_SETTINGS_NOTIFICATION_PUSH_ORDER_UPDATES = 'orderUpdates'
const FB_FS_SETTINGS_NOTIFICATION_PUSH_CHATS = 'chats'
const FB_FS_SETTINGS_NOTIFICATION_PUSH_COMMENTS = 'comments'

const fbfsSettingsGeneral = user => {
	return FB_FS_USER + user[FB_AUTH_UID] + '/' + FB_FS_SETTINGS + 'general/'
}

const FB_FS_SETTINGS_GENERAL_DISPLAY_NAME = 'displayName'
const FB_FS_SETTINGS_GENERAL_LANGUAGES = 'languages'
const FB_FS_SETTINGS_GENERAL_USER_AVATAR = FB_STORAGE_USER_AVATAR

export {
	FB_STORAGE_USER_AVATAR,
	FB_FS_USER,
	FB_AUTH_UID,
	FB_FS_SETTINGS,
	fbfsSettingsNotification,
	FB_FS_SETTINGS_NOTIFICATION_EMAIL,
	FB_FS_SETTINGS_NOTIFICATION_EMAIL_ORDER_UPDATES,
	FB_FS_SETTINGS_NOTIFICATION_EMAIL_NEWS_LETTER,
	FB_FS_SETTINGS_NOTIFICATION_EMAIL_CHATS,
	FB_FS_SETTINGS_NOTIFICATION_EMAIL_COMMENTS,
	FB_FS_SETTINGS_NOTIFICATION_PUSH,
	FB_FS_SETTINGS_NOTIFICATION_PUSH_ORDER_UPDATES,
	FB_FS_SETTINGS_NOTIFICATION_PUSH_CHATS,
	FB_FS_SETTINGS_NOTIFICATION_PUSH_COMMENTS,
	fbfsSettingsGeneral,
	FB_FS_SETTINGS_GENERAL_DISPLAY_NAME,
	FB_FS_SETTINGS_GENERAL_LANGUAGES,
	FB_FS_SETTINGS_GENERAL_USER_AVATAR,
}
