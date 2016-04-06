# 前端数据采集 Collct.js 使用说明

## 数据采集 Collect.js


### 使用
  
   页面中引用和简单配置即可。
        
   *head中添加配置:* 

       	`<script>
			var _YS = _YS || [];
			_YS.push(['Url','http://127.0.0.1:3000/users?']);
			// 收集的平台 host，默认不需要配置
			_YS.push(['systemName','myWap']);
			// 用户自定义收集字段
			_YS.userConfig = {
			author: '白云飘飘'
			};
			_YS.push(['_setAccount', 'YS-Test-1']);
			//_YS.push(['Action','Title']);
			_YS.push(['Target','a','div','button']);
			_YS.syserror = [];
			//记录客户端脚本错误 
			window.onerror = function(error) {
			try { 
			var msg; 
			for (var i = 0; i < arguments.length; i++) { 
			if (i == 0 || i == 2) { 
			msg += " | " + arguments[i]; 
			} 
			} 
			if (msg.length > 0 ) { 
			_YS.syserror.push('syserror:'+msg);
			} 
			return true; 
			} catch (e) { }; 
			};  
        </script>`
     
   *body底部添加引入:*
 
        `<script>
			 (function() {
			var collect = document.createElement('script');
			collect.type = 'text/javascript';
			collect.async = true;
			// collect.js 所在的地址。如果是在本地直接改成本地地址；如果是在第三方服务器上，该第三方必须提供 http 和 https 地址。
			collect.src = ('https:' == document.location.protocol ? 'https://' : 'http://127.0.0.1:3000') + '/javascripts/collect.js';
			var s = document.getElementsByTagName('script')[0];
			s.parentNode.insertBefore(collect, s);
			})();
		</script>`
   
   **使用注意**   

       IE下点击a标签会触发onbeforeunload 事件，故如果a标签非跳转地址，href需要如此设置属性: href="###" ，或者 href="#"；其中3个#号可以防止描点，推荐3个#号。建议按钮请用 button，而非a标签。


### 收集信息集合   

<table>
 <thead>
     <tr>
         <td width="30%">字段名称</td>
         <td width="20%">途径</td>
         <td width="50%">说明</td> 
     </tr>
 </thead>
 <tbody>
     <tr>
         <td width="30%">域名（ domain ）</td>
         <td width="20%">javascript</td>
         <td width="50%">document.domain ；获取的值如："domain" : "127.0.0.1"</td> 
     </tr>
     <tr>
         <td width="30%">URL （url）</td>
         <td width="20%">javascript</td>
         <td width="50%">document.URL；获取的值如："url" : "http://127.0.0.1:3000/"</td> 
     </tr>
     <tr>
         <td width="30%">页面标题 （title）</td>
         <td width="20%">javascript</td>
         <td width="50%">document.title；获取的值如："title" : "Express"；</td> 
     </tr>
     <tr>
         <td width="30%">上一跳url、referrer （referrer）</td>
         <td width="20%">javascript</td>
         <td width="50%">document.referrer；获取的值如："referrer" : "" ；</td> 
     </tr>
     <tr>
         <td width="30%">分辨率 （height：sh； width： sw）</td>
         <td width="20%">javascript</td>
         <td width="50%">window.screen.height & width； 获取的值如："sh" : "1050" ,"sw" : "1680"；</td> 
     </tr>
     <tr>
         <td width="30%">颜色深度 （cd）</td>
         <td width="20%">javascript</td>
         <td width="50%">window.screen.colorDepth； 获取的值如："cd" : "32"；</td> 
     </tr>
     <tr>
         <td width="30%">客户端语言 （lang）</td>
         <td width="20%">javascript</td>
         <td width="50%">navigator.language；获取的值如："lang" : "zh-CN"；</td> 
     </tr>
     <tr>
         <td width="30%">user-agent header（userAgent）</td>
         <td width="20%">javascript</td>
         <td width="50%">navigator.userAgent；获取的值如："userAgent" : "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.82 Safari/537.36"；</td> 
     </tr>
     <tr>
         <td width="30%">访客标识 （_YS_userAccect），该值存在于返回的 cookie值中</td>
         <td width="20%">javascript</td>
         <td width="50%">cookie字段 _YS_userAccect 注：是会话cookie；获取的值如：_YS_userAccect=8c4be85a-7d49-4cc2-ab90-95aa24d4ad95 ；该值已包含在下面获取的 cookie中，用来标记在会话阶段是否是同一个用户在操作；</td> 
     </tr>
     <tr>
         <td width="30%">用户浏览信息cookie （cookie）</td>
         <td width="20%">javascript</td>
         <td width="50%">document.cookie；获取的值如："cookie":"Hm_lvt_2ea96f5214514cb0cf3b685a352bde25=1458020980;"；</td> 
     </tr>
     <tr>
         <td width="30%">网页\网站标识 accout （accout）</td>
         <td width="20%">javascript</td>
         <td width="50%">自定义对象，使用：_YS.push(['_setAccount', 'YS-Test-1']); ；获取的值如："accout":"YS-Test-1" ；</td> 
     </tr>
     <tr>
         <td width="30%">网页\网站标识 accout （accout）</td>
         <td width="20%">javascript</td>
         <td width="50%">离开页面时间 - 进入页面时间， 离开事件onbeforeunload；获取的值如："disp" : "15131" ；</td> 
     </tr>
     <tr>
         <td width="30%">客户端脚本错误信息（syserror）</td>
         <td width="20%">javascript</td>
         <td width="50%">window.onerror – syserror；获取的值如："syserror" : "syserror:undefined | 'dd' 未定义 | 47" ；</td> 
     </tr>
     <tr>
         <td width="30%">记录用户点击特殊标记标签（collectMark）</td>
         <td width="20%">javascript</td>
         <td width="50%">有 collect 标记值的元素；获取的值如："collectMark" : "提交测试代码"；</td> 
     </tr>
     <tr>
         <td width="30%">点击某个元素获取到的该元素信息 （clickElement）</td>
         <td width="20%">javascript</td>
         <td width="50%">有 collect 标记值的元素；获取的值如："collectMark" : "提交测试代码"；</td> 
     </tr>
     <tr>
         <td width="30%">systemName （systemName）</td>
         <td width="20%">javascript</td>
         <td width="50%">标记哪个平台，默认值 window.location.host .split('.')[0] || '' ； 可设置 _YS.push(['systemName','myWap']); ；获取的值如："systemName" : "myWap" ；</td> 
     </tr>
     <tr>
         <td width="30%">userConfig （userConfig）</td>
         <td width="20%">javascript</td>
         <td width="50%">配置用户自定义字段，如：_YS.userConfig = {author: '白云飘飘'}； 获取的值如："userConfig" : "author=%E7%99%BD%E4%BA%91%E9%A3%98%E9%A3%98" ；</td> 
     </tr>
     <tr>
         <td width="30%">Url</td>
         <td width="20%">javascript</td>
         <td width="50%">配置保存数据的请求地址，必须。 如：_YS.push(['Url','http://127.0.0.1:3000/users?']); 该值不会传给后端。</td> 
     </tr>
 </tbody>
</table>





###  更新记录

【2016-03-29】修改：

    已添加collect标记的元素，无需再配置 _YS.push(['Target','a','div','button']) 也可发起请求。

【2016-04-01】 修改：

    添加属性关闭配置，暂时只支持关闭 cookie ，配置如下： _YS.push(['CookieBool','false']); 
    上传的属性中去除重复字段 userConfig；