<template>
  <div id="app"></div>
</template>

<script>
import { http } from "@/plugins/axios/index";
export default {
  async mounted() {
    const res = await http({
      url: "/home/banner",
    });
    console.log(res);
  },
};
</script>
<style lang="less"></style>
