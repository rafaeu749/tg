<template>
	<table id="pagecontent" class="stats" v-if="this.getSelectedRaceIndex >= 0">
		<tr>
			<th class="border" colspan="6"></th>
		</tr>
		<tr>
			<th>
				<div>
					<div>
						<h1>{{ this.race.name }}</h1>
					</div>
					<div>
						<span>{{ this.race.source }}</span>
						<span title="Page {{this.race?.page}}"
							>p{{ this.race?.page }}</span
						>
					</div>
				</div>
			</th>
		</tr>
		<tr>
			<td colspan="6">
				<b>Ability Scores:</b>
				{{
					this.race?.ability?.map((a) => JSON.stringify(a)).join('; ')
				}}
			</td>
		</tr>
		<tr>
			<td colspan="6"><b>Size:</b> {{ this.race.size }}</td>
		</tr>
		<tr>
			<td colspan="6"><b>Speed:</b> {{ this.race.speed }} ft.</td>
		</tr>
		<tr>
			<td colspan="6"><div></div></td>
		</tr>
		<tr>
			<td colspan="6">
				<div>
					<div v-for="(entry, idx) in this.race.entries" :key="idx">
						<span>{{ entry.name }}</span>
						<p v-for="(entry2, idx2) in entry.entries" :key="idx2">
							{{ entry2 }}
						</p>
						<div></div>
					</div>
				</div>
			</td>
		</tr>
		<tr>
			<td colspan="6">
				<b>Source:</b> <i>{{ this.race.source }}</i
				>, page {{ this.race?.page }}
			</td>
		</tr>
		<tr>
			<th class="border" colspan="6"></th>
		</tr>
	</table>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'
import RaceData from '@/definitions/RaceData'

export default defineComponent({
	name: 'RaceDescription',
	components: {},
	computed: {
		...mapGetters({
			getRaceList: 'getRaceList',
			getSelectedRaceIndex: 'getSelectedRaceIndex',
		}),
		race: function (): RaceData {
			return this.getRaceList[this.getSelectedRaceIndex]
		},
	},
})
</script>

<style></style>
