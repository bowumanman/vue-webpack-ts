
export interface LoginForm {
    username: string;
    password: string;
    grant_type: string;
}
export interface EventIpoDto {
    currencyType: number;
}
export interface StateMessage {
    publishMessage: string;
    infoStatus: string;
    enableClick: string; // 可点击
    enableCount: string; // 可统计
    enableSearch: string; // 可查询
    enableQuote: string; // 可引用
}
// 企业库搜索
export interface PageParam  {
    'pageParam.pageIndex': number; // 分页
    'pageParam.pageSize': number; // 分页
}
export interface CompanySearch extends PageParam {
    searchType: string; //  对应字典表openSearchNameType
    name: string;   // 名称
    attribute: number; // 对应字典表companyIdentity
}
// 高管列表搜索
export interface ManageSearch extends PageParam {
    companyId: number; //  
    type: number;   // 2--机构信息,3---基金,4--LP信息
}
// 人物搜索
export interface PersonSearchDto extends PageParam {
    infoStatus: string; //信息状态
    qualityStatus: string; // 质检状态
    id: number; //
    selectType: string; // 查询下拉框类型
    selectValue: string; // 查询文本框值
    orderBy: string; // 排序字段
    sort: string; // 排序方式
}
// 根据人物名称查询相关人物信息
export interface PersonCommonDto extends PageParam {
  selectValue: string; // 查询文本框值
  selectType: string; // 查询下拉框类型
  companyId: string; // 企业id（无此参数传-1）
  attr: number; // 字典companyIdentity
}
// 根据事件id、业务分类获取操作记录信息
export interface OperateHistoryDto extends PageParam {
    businessId: string; // 业务ID
    businessType: string; // 操作历史业务分类(1-工商、2-事件、3人物)
}