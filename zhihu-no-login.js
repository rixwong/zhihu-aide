// ==UserScript==
// @name                知乎免登录
// @namespace           https://wangzeyu.cf/
// @description         去除知乎登陆弹窗
// @author              Ritchie
// @run-at              document-start
// @match               http://*.zhihu.com/*
// @match               https://*.zhihu.com/*
// @date                02/05/2023
// @version             0.1.1
// @license             AGPL-3.0
// ==/UserScript==

(
    function zhNiceFunc(){
 
        var zhClass = new ZhClass();
    
        //关闭登录弹框
        (async function(){
    
            let loginModalWrapper = await BaseClass.getElement(".Modal-wrapper");
    
            if(loginModalWrapper){
    
                let closeButton = loginModalWrapper.querySelector('.Modal-closeButton');
    
                if(closeButton){
    
                    closeButton.click();
    
                }
    
            }
    
        })()
    
        var zhData = [
            {func:'removeVideo',isOpen:GM_getValue('removeVideo','0'),isOnscroll:1,onload:1},
            {func:'removeAD',isOpen:GM_getValue('removeAD','22'),isOnscroll:0,onload:0},
            {func:'downloadVideo',isOpen:GM_getValue('downloadVideo','22'),isOnscroll:0,onload:0},
            {func:'removeRight',isOpen:GM_getValue('removeRight','0'),isOnscroll:0,onload:0},
            {func:'changeLink',isOpen:GM_getValue('changeLink','22'),isOnscroll:0,onload:0},
            {func:'removeKeyword',isOpen:GM_getValue('removeKeyword','0'),isOnscroll:1,onload:1},
            {func:'showSpecialColumn',isOpen:GM_getValue('specialColumn','22'),isOnscroll:1,onload:1},
            {func:'showVideoTitle',isOpen:GM_getValue('videoTitle','22'),isOnscroll:1,onload:1},
            {func:'removeAuthorName',isOpen:GM_getValue('removeAuthorName','22'),isOnscroll:1,onload:1},
            {func:'removeYanxuan',isOpen:GM_getValue('removeYanxuan','0'),isOnscroll:1,onload:1},
            {func:'closeAuthor',isOpen:GM_getValue('removeAuthorName',22),isOnscroll:0,onload:1},
        ]
    
        zhData.forEach(function(item){
            if(item.isOpen==22 && item.onload==0){
                zhClass[item.func]();
            }
        })
    
        window.onload=function(){
            zhData.forEach(function(item){
                if(item.isOpen==22 && item.onload==1){
                    zhClass[item.func]();
                }
            })
        }
        window.onscroll = function(){
    
            var scrollTop = document.documentElement.scrollTop;
    
            if(scrollTop > 200){
    
                zhData.forEach(function(item){
                    if(item.isOpen==22 && item.isOnscroll==1){
    
                        zhClass[item.func]();
                    }
                })
    
            }
    
        }
    
    }
    
)();