<template>
    <button class="ap-button" :class="buttonStyle"><slot /></button>
</template>
<script lang="ts" setup>
import "./style/index.less";
import { computed, defineProps } from "vue";
defineOptions({ name: "ap-button" });

type ButtonProps = {
  type?: string;
};
const buttonProps = defineProps<ButtonProps>();

const buttonStyle = computed(() => {
  return { [`ap-button--${buttonProps.type}`]: buttonProps.type };
});
</script>