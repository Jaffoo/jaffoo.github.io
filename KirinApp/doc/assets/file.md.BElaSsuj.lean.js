import{_ as i,c as l,a0 as a,o as t}from"./chunks/framework.C87fWP1O.js";const u=JSON.parse('{"title":"文件(KirinApp类/FileManage静态类)","description":"","frontmatter":{},"headers":[],"relativePath":"file.md","filePath":"file.md"}'),r={name:"file.md"};function n(p,e,o,s,c,d){return t(),l("div",null,e[0]||(e[0]=[a('<h1 id="文件-kirinapp类-filemanage静态类" tabindex="-1">文件(KirinApp类/FileManage静态类) <a class="header-anchor" href="#文件-kirinapp类-filemanage静态类" aria-label="Permalink to &quot;文件(KirinApp类/FileManage静态类)&quot;">​</a></h1><h2 id="openfile" tabindex="-1">OpenFile <a class="header-anchor" href="#openfile" aria-label="Permalink to &quot;OpenFile&quot;">​</a></h2><p>说明：选择文件</p><p>参数：</p><ul><li>filePath(string)-初始路径-选填</li><li>fileTypeFilter(Dictionary&lt;string, string&gt;)-文件类型过滤-选填</li></ul><p>返回：</p><ul><li>selected(bool)-是否选中</li><li>file(File)-文件</li></ul><h2 id="openfiles" tabindex="-1">OpenFiles <a class="header-anchor" href="#openfiles" aria-label="Permalink to &quot;OpenFiles&quot;">​</a></h2><p>说明：选择文件(多选)</p><p>参数：</p><ul><li>filePath(string)-初始路径-选填</li><li>fileTypeFilter(Dictionary&lt;string, string&gt;)-文件类型过滤-选填</li></ul><p>返回：</p><ul><li>selected(bool)-是否选中</li><li>files(List&lt;File&gt;)-文件列表</li></ul><h2 id="opendirectory" tabindex="-1">OpenDirectory <a class="header-anchor" href="#opendirectory" aria-label="Permalink to &quot;OpenDirectory&quot;">​</a></h2><p>说明：选择文件夹</p><p>参数：</p><ul><li>initialDir(string)-初始路径-选填</li></ul><p>返回：</p><ul><li>selected(bool)-是否选中</li><li>directory(Directory)-文件夹</li></ul><p>注：此页面的方法，请在主线程中调用，非主线程可能会导致异常</p>',20)]))}const h=i(r,[["render",n]]);export{u as __pageData,h as default};