<template>
	<div class="container">
		<table>
			<thead>
				<td>Name</td>
				<td>Ability</td>
				<td>Size</td>
				<td>Source</td>
			</thead>
			<tr
				v-for="(race, idx) in getRaceList"
				:key="idx"
				@click="this.selectRace(idx)"
				style="cursor: pointer"
				:class="idx % 2 == 0 ? 'lighter' : ''">
				<td>{{ race?.name }}</td>
				<td>{{ this.parseAbility(race?.ability ?? []) }}</td>
				<td>
					{{ race?.size?.map((s) => this.parseSize(s)).join('; ') }}
				</td>
				<td>{{ race?.source }}</td>
			</tr>
		</table>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapMutations, mapGetters } from 'vuex'

export default defineComponent({
	name: 'RaceList',
	components: {},
	computed: {
		...mapGetters({ getRaceList: 'getRaceList' }),
	},
	methods: {
		...mapMutations({ setSelectedRaceIndex: 'setSelectedRaceIndex' }),
		selectRace: function (index: number) {
			this.setSelectedRaceIndex(index)
		},
		parseAbility: (ability: string | Array<any>) =>
			typeof ability == 'string'
				? map5eAbility(ability)
				: map5eAbility(ability[0]),
		parseSize: (size: string) => map5eSize(size),
	},
})

const map5eAbility = function (data: any) {
	if (!data) return ''
	const ret = [] as Array<string>
	Object.keys(data).forEach((key: string) => {
		ret.push(`${capitalize(key)}: ${data[key] > 0 ? '+' : '-'}${data[key]}`)
	})
	return ret.join('; ')
}

const map5eSize = function (size: string) {
	switch (size) {
		case 'M':
			return 'Medium'
		case 'S':
			return 'Small'
		case 'V':
			return 'Variant'
		default:
			return `ANOTHER DIMENSION OF REALITY (${size})`
	}
}

const capitalize = function (str: string) {
	if (str.length == 0) return ''
	if (str.length == 1) return str.charAt(0).toUpperCase()
	return str.charAt(0).toUpperCase() + str.slice(1)
}
</script>

<style>
.container {
	max-height: 70vh;
	overflow: auto;
}
.lighter {
	background-color: #405b77;
}
</style>
