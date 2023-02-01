import{_ as e,c as t,o as a,a as r}from"./app.af31bdc2.js";const u=JSON.parse('{"title":"pxt-hidserial 手册页","description":"","frontmatter":{},"headers":[{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"描述","slug":"描述","link":"#描述","children":[]},{"level":2,"title":"另请参见","slug":"另请参见","link":"#另请参见","children":[]}],"relativePath":"CL/hidserial.md","lastUpdated":1675251710000}'),d={name:"CL/hidserial.md"},o=r('<h1 id="pxt-hidserial-手册页" tabindex="-1">pxt-hidserial 手册页 <a class="header-anchor" href="#pxt-hidserial-手册页" aria-hidden="true">#</a></h1><p>监控某些板（特别是 SAMD21 板）的串行输出</p><blockquote><p>pxt hidserial</p></blockquote><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-hidden="true">#</a></h2><p>此命令依赖于<a href="https://github.com/node-hid/node-hid" target="_blank" rel="noreferrer">node hid</a>，这是 node.JS 的本地包。要安装此包，请运行</p><blockquote><p>pxt npminstallnative</p></blockquote><h2 id="描述" tabindex="-1">描述 <a class="header-anchor" href="#描述" aria-hidden="true">#</a></h2><p>当使用 Codal 运行时，PXT 通过 <a href="https://github.com/microsoft/uf2/blob/master/hf2.md" target="_blank" rel="noreferrer"> custom USB HID protocol called HF2</a>从 <code>Console.log()</code>和朋友发送数据。该协议支持许多其他功能，包括闪烁和一些调试。HF2 适用于所有主要操作系统（包括 Windows 7），无需任何驱动程序。</p><p><code>pxt hidserial</code> 只是将串行数据转储到标准输出。使用 <code>pxt serve</code> 和开发时 <code>http://localhost:3232</code>，HID 串行被转发到浏览器，因此不需要使用 <code>pxt hidserial</code>。</p><p>其他有用的 HID 命令包括 <code>pxt hidlist</code> 以列出连接的 HID 设备，pxt hiddmesg 以转储 Codal 调试缓冲区。PXT 也可以通过 HID 进行部署-这是使用命令行或 <code>pxt serve</code> 时的默认设置。</p><h2 id="另请参见" tabindex="-1">另请参见 <a class="header-anchor" href="#另请参见" aria-hidden="true">#</a></h2><p><a href="https://makecode.com/cli" target="_blank" rel="noreferrer">pxt</a> tool</p>',12),i=[o];function l(c,h,s,n,p,_){return a(),t("div",null,i)}const x=e(d,[["render",l]]);export{u as __pageData,x as default};
