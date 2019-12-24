import { fireStored, auth, getServerTimestamp } from 'firebaseInit/core'

import {
	fbfsSettingsGeneralPath,
	fbfsSettingsNotificationPath,
	UPDATED_AT,
} from 'constantValues'

const createDocGetSet = path => {
	const ref = () => fireStored().doc(path(auth().currentUser.uid))
	const get = () => ref().get()
	const set = (data, options = { merge: true }) =>
		ref().set(
			{
				[UPDATED_AT]: getServerTimestamp(),
				...data,
			},
			options
		)
	const onSanpshot = (...args) => ref().onSnapshot(...args)
	return [get, set, onSanpshot]
}

const [
	docGeneralSettingGet,
	docGeneralSettingSet,
	docGeneralSettingOnSnapshot,
] = createDocGetSet(fbfsSettingsGeneralPath)
const [docNotificationSettingGet, docNotificationSettingSet] = createDocGetSet(
	fbfsSettingsNotificationPath
)

export {
	docGeneralSettingGet,
	docGeneralSettingSet,
	docGeneralSettingOnSnapshot,
	docNotificationSettingGet,
	docNotificationSettingSet,
}