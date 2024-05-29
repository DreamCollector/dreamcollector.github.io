'use strict'
let pzai = {
    // 分类动态栏
    categoriesBarActive: () => {
        let $list = document.getElementById('category-bar-list')
        if ($list) {
            // 鼠标滚轮滚动
            $list.addEventListener('mousewheel', function (e) {
                // 计算鼠标滚轮滚动的距离
                $list.scrollLeft -= e.wheelDelta / 2
                // 阻止浏览器默认方法
                e.preventDefault()
            }, false)

            // 高亮当前页面对应的分类或标签
            let path = decodeURIComponent(window.location.pathname).replace(/page\/[0-9]+\//g, '')
            let category = document.getElementById(path)
            category?.classList.add('selected')
            // 滚动当前页面对应的分类或标签到中部
            // $list.scrollLeft = ($catalog.offsetLeft - $list.offsetLeft) - ($list.offsetWidth - $catalog.offsetWidth) / 2
        }
    },
    // 标签动态栏
    tagsBarActive: () => {
        let $list = document.getElementById('tag-bar-list')
        if ($list) {
            // 鼠标滚轮滚动
            $list.addEventListener('mousewheel', function (e) {
                // 计算鼠标滚轮滚动的距离
                $list.scrollLeft -= e.wheelDelta / 2
                // 阻止浏览器默认方法
                e.preventDefault()
            }, false)

            // 高亮当前页面对应的分类或标签
            let path = decodeURIComponent(window.location.pathname).replace(/page\/[0-9]+\//g, '')
            let tag = document.getElementById(path)
            tag?.classList.add('selected')
            // 滚动当前页面对应的分类或标签到中部
            // $list.scrollLeft = ($catalog.offsetLeft - $list.offsetLeft) - ($list.offsetWidth - $catalog.offsetWidth) / 2
        }
    }

};