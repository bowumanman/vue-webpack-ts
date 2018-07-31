/*
* @Author: zhangsai
* @Date: 2018/4/3
* @Last Modified by: zhangsai
* @Last Modified time: 2018/4/3
* @description: tab-menu
*/
<template>
    <div>
      <el-tabs v-model="currIndexStr" type="border-card" closable @tab-remove="removeTab" @tab-click='clickTab'>
			<el-tab-pane v-for="(item, index) in tabList" :key="index" :label="item.name" :name="index.toString()">
			</el-tab-pane>
		</el-tabs>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { TAB_MENU_LIST, TAB_MENU_CURR_INDEX } from '../../store/user';
interface TabList {
    name: string;
    url: string;
}
@Component
export default class TabMenu extends Vue {
    // 初始化数据
    public currIndex: number = Number(localStorage.getItem(TAB_MENU_CURR_INDEX) || 0);
    public currIndexStr: string = this.currIndex.toString();
    public tabList: TabList[] = JSON.parse(localStorage.getItem(TAB_MENU_LIST) || '[]');
    
    // 添加 tab
    public addTab(data: {url: string, name: string}) {
        this.tabList = JSON.parse(localStorage.getItem(TAB_MENU_LIST) || '[]');
        const isExist = this.tabList.findIndex(x => x.name === data.name);
        if (isExist === -1) {
            this.tabList.push(data);
            this.currIndex = (this.tabList.length - 1);
        } else {
            this.currIndex = isExist;
        }
        this.changeTab();
    }
    // 删除tab方法
    public removeTab(index: number) {
        this.tabList = JSON.parse(localStorage.getItem(TAB_MENU_LIST) || '[]');        
        if (this.tabList.length === 1) {
            return;
        }
        if (index === Number(this.currIndex)) {
            this.tabList.splice(index, 1);
        } else {
            // 如果是关闭后面的  不变  关闭前面的 减一
            this.currIndex = index > this.currIndex ? this.currIndex : (this.currIndex - 1);
            this.currIndex = this.currIndex - 1 < 0 ? 0 : this.currIndex;
            this.tabList.splice(index, 1);
        }
        this.changeTab();
    }
    // 点击tab
    public clickTab(item: {index: string}) {
        this.currIndex = Number(item.index);
        this.changeTab();
    }
    // 当tab改变时
    public changeTab() {
        const url = this.tabList[this.currIndex].url;
        this.$router.push( {name: url} );
        this.saveLocal();
    }
    // 存local
    public saveLocal() {
        this.currIndexStr = this.currIndex.toString();
        localStorage.setItem(TAB_MENU_LIST, JSON.stringify(this.tabList));
        localStorage.setItem(TAB_MENU_CURR_INDEX, JSON.stringify(this.currIndex));
    }
    //带参数的 添加 tab  和 改变 tab
     public addTabHasParams(data: {url: string, name: string }, params: any) {
        const isExist = this.tabList.findIndex(x => x.name === data.name);
        if (isExist === -1) {
            this.tabList.push(data);
            this.currIndex = (this.tabList.length - 1);
        } else {
            this.currIndex = isExist;
        }
        // 改变 tab
        const url = this.tabList[this.currIndex].url;
        this.$router.push({ name: url, params });
        this.saveLocal();
    }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

</style>
