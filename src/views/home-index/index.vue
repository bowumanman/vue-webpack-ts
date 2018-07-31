<template>
  <div>
    <div style="min-height:600px">
        个人中心
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
@Component({})
export default class HomeIndex extends Vue {
  // 初始化数据 相当于data
  // refs
  public $refs: {
    logoImg: any
  };
  // 生命周期
  public async mounted() {
    // const personId = '2';
    // const data = await PersonService.getPersonDetail(personId);
    // this.person = data; // <PersonVo> person
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
