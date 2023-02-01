import{_ as e,c as a,o as t,a as r}from"./app.af31bdc2.js";const b=JSON.parse('{"title":"创建目标","description":"","frontmatter":{},"headers":[{"level":2,"title":"目标结构","slug":"目标结构","link":"#目标结构","children":[{"level":3,"title":"pxtarget.json","slug":"pxtarget-json","link":"#pxtarget-json","children":[]},{"level":3,"title":"package.json","slug":"package-json","link":"#package-json","children":[]},{"level":3,"title":"更新assets文件夹","slug":"更新assets文件夹","link":"#更新assets文件夹","children":[]},{"level":3,"title":"主页配置","slug":"主页配置","link":"#主页配置","children":[]},{"level":3,"title":"core","slug":"core","link":"#core","children":[]},{"level":3,"title":"将 JavaScript 库添加到目标中","slug":"将-javascript-库添加到目标中","link":"#将-javascript-库添加到目标中","children":[]},{"level":3,"title":"将 JavaScript 库暴露给 TypeScript 和 Blockly","slug":"将-javascript-库暴露给-typescript-和-blockly","link":"#将-javascript-库暴露给-typescript-和-blockly","children":[]},{"level":3,"title":"更新 project templates","slug":"更新-project-templates","link":"#更新-project-templates","children":[]},{"level":3,"title":"在本地测试目标","slug":"在本地测试目标","link":"#在本地测试目标","children":[]}]},{"level":2,"title":"定义 API 和块","slug":"定义-api-和块","link":"#定义-api-和块","children":[]},{"level":2,"title":"路径重写","slug":"路径重写","link":"#路径重写","children":[]}],"relativePath":"guide/target-creation.md","lastUpdated":1675251710000}'),c={name:"guide/target-creation.md"},o=r(`<h1 id="创建目标" tabindex="-1">创建目标 <a class="header-anchor" href="#创建目标" aria-hidden="true">#</a></h1><p>PXT 可以定制为创建您自己的<strong>目标</strong>，使用您自己的一组 API 和运行时，并得到基于块和 JavaScript 编辑的支持。具体项目如下:</p><ul><li><a href="https://makecode.adafruit.com" target="_blank" rel="noreferrer">https://makecode.adafruit.com</a> (源自 <a href="https://github.com/microsoft/pxt-adafruit" target="_blank" rel="noreferrer">https://github.com/microsoft/pxt-adafruit</a>)</li><li><a href="https://maker.makecode.com" target="_blank" rel="noreferrer">https://maker.makecode.com</a> (源自 <a href="https://github.com/microsoft/pxt-maker" target="_blank" rel="noreferrer">https://github.com/microsoft/pxt-maker</a>)</li><li><a href="https://microsoft.github.io/pxt-sample/" target="_blank" rel="noreferrer">https://microsoft.github.io/pxt-sample/</a> (源自 <a href="https://github.com/microsoft/pxt-sample" target="_blank" rel="noreferrer">https://github.com/microsoft/pxt-sample</a>)</li></ul><p>我们假定读者熟悉Node.JS、NPM、JavaScript和/或C++。如果尚未执行此操作，请安装Node. JS和PXT命令行</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm install -g pxt</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>获取<a href="https://github.com/microsoft/pxt-sample" target="_blank" rel="noreferrer">pxt-sample</a>的副本，并在您喜欢的编辑器中打开它。</li><li>打开一个命令提示符并运行在目标文件夹</li><li>npm install</li></ul><p>此时，为您的目标选择一个标识符。仅使用字母字符，因为它将在各种路由操作中使用。</p><h2 id="目标结构" tabindex="-1">目标结构 <a class="header-anchor" href="#目标结构" aria-hidden="true">#</a></h2><p>目标包含一个pxtarget.json文件和以下文件夹：</p><ul><li><code>/libs</code> 定义（在C ++，Static TypeScript或Thumb汇编器中的）API的包（有时称为库）以及它们如何呈现给积木块。</li><li><code>/sim</code> 用于浏览器中的模拟器的TypeScript源代码, 如果存在的话。</li><li><code>/docs</code> markdown文档页面</li></ul><h3 id="pxtarget-json" tabindex="-1">pxtarget.json <a class="header-anchor" href="#pxtarget-json" aria-hidden="true">#</a></h3><p>pxtarget. json文件包含target的配置选项。 现在, 请更新、和字段以反映您的target信息。<code>id name title</code></p><ul><li>小贴士：在此文件搜索并替如上字段 <code>sample&gt;pxtarget.json</code></li></ul><h3 id="package-json" tabindex="-1">package.json <a class="header-anchor" href="#package-json" aria-hidden="true">#</a></h3><p>您的target最终将必须发布到 NPM, 因此请继续使用您的目标 id、存储库位置等更新文件。 * 也是个好机会可以是检查您的target id 是否在 NPM 中也是可用的。<code>package.json</code></p><h3 id="更新assets文件夹" tabindex="-1">更新assets文件夹 <a class="header-anchor" href="#更新assets文件夹" aria-hidden="true">#</a></h3><p>图形资源在 文件夹下面。<code>/docs/static</code></p><ul><li><strong>avatar.svg</strong> 用于主页头部图片</li><li><strong>loader.svg</strong> 用于加载状态图片</li></ul><h3 id="主页配置" tabindex="-1">主页配置 <a class="header-anchor" href="#主页配置" aria-hidden="true">#</a></h3><p>请参考 <a href="https://makecode.com/targets/home-screen" target="_blank" rel="noreferrer">targets/home-screen</a></p><h3 id="core" tabindex="-1">core <a class="header-anchor" href="#core" aria-hidden="true">#</a></h3><p>pxt-sample 包定义了一个最小的包结构 <code>libs/core</code></p><p>事实上，pxt-sample 的 API 存在于(带注释的暴露 <a href="https://makecode.com/defining-blocks" target="_blank" rel="noreferrer">定义积木块</a>)中，因为这个目标仅用于 web。PXT 编译器根据模拟器代码生成文件 <code> sim/api.ts libs/core/sim.d.ts</code></p><p>有关创建包的更多信息，请参见<a href="https://makecode.com/packages" target="_blank" rel="noreferrer">创建PXT包</a>，其中包括包本身中的代码。现在，您可以尝试将一个新的 API 添加到带有注释的现有名称空间中，以创建一个新块 <code>sim/api.ts</code></p><h3 id="将-javascript-库添加到目标中" tabindex="-1">将 JavaScript 库添加到目标中 <a class="header-anchor" href="#将-javascript-库添加到目标中" aria-hidden="true">#</a></h3><p>您可能希望在目标中使用许多有用的 JavaScript 库，尤其是为了更轻松地构建模拟器 （）。执行此操作的基本模式是：<code>sim/simulator.js</code></p><ul><li>将 JavaScript 文件添加到目录 <code>sim/public/js</code></li><li>在使用标记时包括这些文件 <code>sim/public/simulator.html &lt;script&gt;</code></li></ul><h3 id="将-javascript-库暴露给-typescript-和-blockly" tabindex="-1">将 JavaScript 库暴露给 TypeScript 和 Blockly <a class="header-anchor" href="#将-javascript-库暴露给-typescript-和-blockly" aria-hidden="true">#</a></h3><p>如果你想让JavaScript函数（来自现有库）对目标用户可用（通过TypeScript和Blockly），还有更多的工作要做。您需要编写 TypeScript 函数来包装现有的 JavaScript 函数。一些 JavaScript 库可能已经有一个可用的 TypeScript 声明文件，这可以使过程更简单。</p><h3 id="更新-project-templates" tabindex="-1">更新 project templates <a class="header-anchor" href="#更新-project-templates" aria-hidden="true">#</a></h3><p>模板是目标的默认项目。有一个默认的块项目和一个默认的JavaScript项目。初始模板是空项目。若要更改默认项目，请在 <code>libs/blocksprj</code> 目录</p><h3 id="在本地测试目标" tabindex="-1">在本地测试目标 <a class="header-anchor" href="#在本地测试目标" aria-hidden="true">#</a></h3><p>更新目标后，即可在本地运行。运行以下命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">pxt serve</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>编辑器将自动打开目标 API 项目，您可以直接在 PXT 中对其进行编辑。此时，我们建议使用将用作沙盒的块创建新项目。在本地测试目标时，将在文件夹下创建新项目（并自动“git 忽略”）。您可以使用这些项目来更改模板。只需将项目的内容复制到<code>/projects</code> <code>/projects</code> <code>/libs/templates/</code></p><p>每当您进行更改时，本地 Web 服务器都会触发构建。只需在构建完成后重新加载页面即可。</p><h2 id="定义-api-和块" tabindex="-1">定义 API 和块 <a class="header-anchor" href="#定义-api-和块" aria-hidden="true">#</a></h2><p>PXT环境中可用的API是从TypeScript包（库）文件（下面的文件）加载的。它们可以从C++库文件或TypeScript模拟器文件自动生成 <code>/libs</code></p><p>阅读更多关于<a href="https://makecode.com/defining-blocks" target="_blank" rel="noreferrer">如何注释APIS</a>以在PXT中将其公开为块的信息</p><h2 id="路径重写" tabindex="-1">路径重写 <a class="header-anchor" href="#路径重写" aria-hidden="true">#</a></h2><p>上传到 PXT 云时，各种文件的 URL 将被重写为指向 CDN 的文件。CDN 上有三种类型的 URL：</p><ul><li><code>/blob/&lt;blob_hash&gt;/some/path/filename.ext</code> -路径和文件名可以是任意的</li><li><code>/commit/&lt;commit_hash&gt;/path/in/that/commit/filename.ext</code> -路径实际来自提交的位置</li><li><code>/tree/&lt;tree_hash&gt;/path/in/that/tree/filename.ext</code> -路径实际来自树的地方</li></ul><p>应尽可能使用 URL，因为它们仅在文件更改时更改。这允许更快的应用程序更新 <code>/blob/</code></p><p>例如，比较 <a href="https://makecode.microbit.org/%5C---manifest" target="_blank" rel="noreferrer">https://makecode.microbit.org/\\---manifest</a> 和 <a href="https://github.com/microsoft/pxt/blob/master/webapp/public/release.manifest" target="_blank" rel="noreferrer">https://github.com/microsoft/pxt/blob/master/webapp/public/release.manifest</a></p><p>通常，PXT将重写以to开头的URL和以to开头。这发生在manifest和HTML文件以及一些JavaScript文件（web worker源代码和）中。部分重写在上传时发生在客户端（引入了和等字符串），部分重写发生在云中 <code>/cdn/</code> <code>/commit/...</code> <code>/blb/</code> <code>/blob/...</code> <code>embed.js</code> <code>unknown macro</code> <code>unknown macro</code></p><p>当前，仅在模拟器文件中，所有内容都被重写为。但是，未来，模拟器文件应明确使用以使意图清晰 <code>/cdn/</code> <code>/sim/</code> <code>/blb/</code> <code>/blob/...</code> <code>/blb/</code></p><p>使用的主要原因是资源需要相对路径时。例如，这是阻止媒体文件的情况。 <code>/cdn/</code> <code>/blb/</code></p><p>URL尚未在重写中支持。<code>/tree/...</code></p>`,48),i=[o];function l(s,p,d,n,h,m){return t(),a("div",null,i)}const u=e(c,[["render",l]]);export{b as __pageData,u as default};