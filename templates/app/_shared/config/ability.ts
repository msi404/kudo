import { AbilityBuilder, createMongoAbility, MongoAbility } from '@casl/ability'

export type Actions = 'manage' | 'create' | 'read' | 'update' | 'delete'
export type Subjects = 'Home' | 'About' | 'all'

export type AppAbility = MongoAbility<[Actions, Subjects]>

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const defineAbilitiesFor = (user: any) => {
	const { can, cannot, build } = new AbilityBuilder<AppAbility>(
		createMongoAbility
	)

	if (user.role === 104) {
		cannot('create', 'Home')
	}
	if (user.role === 0) {
		can('manage', 'all')
	}

	return build()
}
