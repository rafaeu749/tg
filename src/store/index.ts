import { createStore, Commit } from 'vuex'
import { State } from '@vue/runtime-core'
import RaceData from '@/definitions/RaceData'

const state: State = {
	raceDataList: [] as Array<RaceData>,
	selectedRaceIndex: -1,
}

const getters = {
	getRaceList: function (state: State): Array<RaceData> {
		return state.raceDataList
	},
	getSelectedRaceIndex: function (state: State): number {
		return state.selectedRaceIndex
	},
}

const mutations = {
	setRaceListData: function (state: State, list: Array<RaceData>) {
		state.raceDataList = list
	},
	setSelectedRaceIndex: function (state: State, index: number) {
		state.selectedRaceIndex = index
	},
}

const actions = {
	readFile: async function (
		{ commit }: { commit: Commit },
		file: File | null
	): Promise<void> {
		const reader = new FileReader()
		reader.onload = () => {
			setTimeout(() => {
				commit(
					'setRaceListData',
					map5e(JSON.parse(reader.result as string))
				)
			}, 1000)
		}
		if (file != null) reader.readAsText(file)
	},
}

const map5e = function (data: any): Array<RaceData> {
	const props: Array<RaceData> = []
	for (let index = 0; index < data.race.length; index++) {
		const race = data.race[index]
		const stun: RaceData = {
			name: race.name,
			source: race.source,
			page: race.page,
			size: race.size,
			speed: race.speed,
			ability: race.ability,
			traitTags: race.traitTags,
			languageProficiencies: race.languageProficiencies,
			entries: race.entries,
			otherSources: race.otherSources,
			age: race.age,
			soundClip: race.soundClip,
			hasFluff: race.hasFluff,
			hasFluffImages: race.hasFluffImages,
			darkvision: race.darkvision,
			resist: race.resist,
			additionalSpells: race.additionalSpells,
			heightAndWeight: race.heightAndWeight,
			subraces: race.subraces,
			skillProficiencies: race.skillProficiencies,
			lineage: race.lineage,
			creatureTypes: race.creatureTypes,
			toolProficiencies: race.toolProficiencies,
			conditionImmune: race.conditionImmune,
			_copy: race._copy,
			feats: race.feats,
			srd: race.srd,
			weaponProficiencies: race.weaponProficiencies,
			additionalSources: race.additionalSources,
			immune: race.immune,
			armorProficiencies: race.armorProficiencies,
			vulnerable: race.vulnerable,
		}
		props.push(stun)
	}
	return props
}

const modules = {}

export default createStore({
	state,
	getters,
	mutations,
	actions,
	modules,
})
