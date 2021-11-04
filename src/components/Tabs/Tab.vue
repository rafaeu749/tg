<template lang="html">
	<div class="tab" v-show="isActive">
		<slot></slot>
	</div>
</template>

<script lang="ts">
import {
	defineComponent,
	ref,
	inject,
	watch,
	onBeforeMount,
	VNode,
	RendererNode,
} from 'vue'

export default defineComponent({
	name: 'Tab',
	setup() {
		const index = ref(0)
		const isActive = ref(false)

		const tabs = inject('TabsProvider') as {
			selectedIndex: number
			tabs: VNode<RendererNode>[]
			count: number
		}

		watch(
			() => tabs.selectedIndex,
			() => {
				isActive.value = index.value === tabs.selectedIndex
			}
		)

		onBeforeMount(() => {
			index.value = tabs.count
			tabs.count++
			isActive.value = index.value === tabs.selectedIndex
		})
		return { index, isActive }
	},
})
</script>

<style lang="css"></style>
