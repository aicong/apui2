<template>
  <div>
    <ap-button type="primary">Login</ap-button>
  </div>
</template>
<script lang="tsx">
import { defineComponent } from "vue";
export default defineComponent({
  name: "app",
  setup(props, ctx) {
    return () => (
      <div
        onClickOnce={() => {
          console.log("我被点击");
        }}
      >
        点击
      </div>
    );
  },
});
</script>
<style>
.a {
  color: #000;
}
</style>
