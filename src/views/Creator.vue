<template>
	<div class="creator">
		<input type="file" @change="handleOnChange($event.target)" />
		<hr />
		<div v-show="loading"><em>Carregando...</em></div>
		<div>
			{{ this.raceListCount }} total races loaded (selected:
			{{ this.selectedIndex }})
		</div>
		<div class="container">
			<div class="flex-item">
				<race-list />
			</div>
			<div class="flex-item">
				<race-description />
			</div>
		</div>
		<hr />
		<div v-if="this.getSelectedRaceIndex >= 0">
			{{ this.getRaceList[this.getSelectedRaceIndex] }}
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapActions, mapGetters } from 'vuex'
import RaceDescription from '@/components/Creator/RaceDescription.vue'
import RaceList from '@/components/Creator/RaceList.vue'

export default defineComponent({
	name: 'Creator',
	components: { RaceDescription, RaceList },
	data: function () {
		return {
			loading: false,
		}
	},
	computed: {
		...mapGetters({
			getRaceList: 'getRaceList',
			getSelectedRaceIndex: 'getSelectedRaceIndex',
		}),
		raceListCount: function (): number {
			return (this as any).getRaceList.length
		},
		selectedIndex: function (): number {
			return (this as any).getSelectedRaceIndex
		},
	},
	methods: {
		...mapActions({ readFile: 'readFile' }),
		async handleOnChange(input: HTMLInputElement): Promise<void> {
			this.loading = true
			let files = input.files
			if (!files) return
			if (!files.length) return
			if (files[0] == null) return

			this.readFile(files[0])
				.catch((ex: any) => {
					console.error(ex)
				})
				.finally(() => {
					this.loading = false
				})
		},
	},
	beforeMount() {
		console.log('before mount')
	},
})
</script>
<style scoped>
.container {
	display: flex;
}
.flex-item {
	display: inline-flex;
	flex-direction: column;
	max-width: 50%;
	overflow: auto;
}
</style>
