import React from 'react';
export default {
    formateDate(time){
        if(!time){
            return '';
        } ;
        let date = new Date(time);
        return  date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+' '+date.getHours()+":"+date.getMinutes()+':'+date.getSeconds();
    },
    pagination(data,callback){
        let page = {
            onChange(page, pageSize){
                callback(page)
            },
            defaultCurrent:data.current,
            pageSize:data.page_size,
            total:data.total,
            showTotal(total, range){
                return `共${data.total}条`
            },
            itemRender(current, type, originalElement) {
                if (type === 'prev') {
                  return (<a href="#">上一页</a>);
                } if (type === 'next') {
                  return (<a href="#">下一页</a>);
                }
                return originalElement;
            },
            showQuickJumper:true,
            onShowSizeChange(){

            }
        }
        return page
    }

}
