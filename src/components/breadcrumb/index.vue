/*
* @Author: zhangsai
* @Date: 2018/5/23
* @description: 面包线
*/
<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="breadcrumbList && breadcrumbList.length >= 2">
            <el-breadcrumb-item v-for="(item, i) in breadcrumbList" :key="i" >
                <a href="javascript:;" v-if="item.url" @click="goLink(item.url)">{{item.name}}</a>
                <span v-else>{{(breadcrunbId == '-1' ? '添加' : '编辑') + item.name}}</span>
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
@Component
export default class Breadcrumb extends Vue {
    @Prop({ default: undefined })
    public breadcrumbList;
    @Prop({ default: '-1'})
    public breadcrunbId;
    // 方法
    public goLink(url: string) {
        if (url) {
            this.$router.push({ name: url});
        }
    }
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>