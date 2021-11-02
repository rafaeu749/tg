import { Store } from 'vuex'
import { RaceData } from '@/definitions/RaceData'

declare module '@vue/runtime-core' {
	// declare your own store states
	interface State {
		raceDataList: Array<RaceData>
		selectedRaceIndex: number
	}

	// provide typings for `this.$store`
	interface ComponentCustomProperties {
		$store: Store<State>
	}
}
