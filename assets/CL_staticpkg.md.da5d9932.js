import{_ as e,c as t,o as a,a as i}from"./app.b666acaa.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"pxt-staticpkg 手册页","slug":"pxt-staticpkg-手册页","link":"#pxt-staticpkg-手册页","children":[]},{"level":2,"title":"描述","slug":"描述","link":"#描述","children":[]},{"level":2,"title":"标志","slug":"标志","link":"#标志","children":[{"level":3,"title":"route (可选)","slug":"route-可选","link":"#route-可选","children":[]},{"level":3,"title":"githubpages (可选)","slug":"githubpages-可选","link":"#githubpages-可选","children":[]},{"level":3,"title":"output (可选)","slug":"output-可选","link":"#output-可选","children":[]},{"level":3,"title":"locs-src (可选)","slug":"locs-src-可选","link":"#locs-src-可选","children":[]},{"level":3,"title":"minify (可选)","slug":"minify-可选","link":"#minify-可选","children":[]},{"level":3,"title":"githubpages (可选)","slug":"githubpages-可选-1","link":"#githubpages-可选-1","children":[]},{"level":3,"title":"bump (可选)","slug":"bump-可选","link":"#bump-可选","children":[]}]},{"level":2,"title":"使用静态文件部署 PXT","slug":"使用静态文件部署-pxt","link":"#使用静态文件部署-pxt","children":[]},{"level":2,"title":"GitHub Pages支持","slug":"github-pages支持","link":"#github-pages支持","children":[]}],"relativePath":"CL/staticpkg.md"}'),r={name:"CL/staticpkg.md"},s=i(`<h2 id="pxt-staticpkg-手册页" tabindex="-1">pxt-staticpkg 手册页 <a class="header-anchor" href="#pxt-staticpkg-手册页" aria-hidden="true">#</a></h2><p>将目标打包为静态 HTML 页面</p><blockquote><p>pxt staticpkg [--route route] [--githubpages] [--output output] [--locs-src locs-src]</p></blockquote><h2 id="描述" tabindex="-1">描述 <a class="header-anchor" href="#描述" aria-hidden="true">#</a></h2><p>将 PXT 编辑器编译为静态 HTML 文件，这些文件可以在没有服务器的情况下提供，也可以集成到应用程序中。生成的文件放置在<code>built/packaged</code>中。</p><h2 id="标志" tabindex="-1">标志 <a class="header-anchor" href="#标志" aria-hidden="true">#</a></h2><h3 id="route-可选" tabindex="-1">route (可选) <a class="header-anchor" href="#route-可选" aria-hidden="true">#</a></h3><p>路由路径。如果缺少，则默认为<code>local</code>。路由将被注入应用程序中的所有路径。</p><h3 id="githubpages-可选" tabindex="-1">githubpages (可选) <a class="header-anchor" href="#githubpages-可选" aria-hidden="true">#</a></h3><p>生成与 GitHub 页面兼容的网站。</p><h3 id="output-可选" tabindex="-1">output (可选) <a class="header-anchor" href="#output-可选" aria-hidden="true">#</a></h3><p>生成文件的目录。</p><blockquote><p>在启动进程之前，将清理此目录。</p></blockquote><h3 id="locs-src-可选" tabindex="-1">locs-src (可选) <a class="header-anchor" href="#locs-src-可选" aria-hidden="true">#</a></h3><h3 id="minify-可选" tabindex="-1">minify (可选) <a class="header-anchor" href="#minify-可选" aria-hidden="true">#</a></h3><p>最小化所有生成的 js 文件</p><h3 id="githubpages-可选-1" tabindex="-1">githubpages (可选) <a class="header-anchor" href="#githubpages-可选-1" aria-hidden="true">#</a></h3><p>生成与 GitHub 页面兼容的网站。</p><h3 id="bump-可选" tabindex="-1">bump (可选) <a class="header-anchor" href="#bump-可选" aria-hidden="true">#</a></h3><p>颠簸版本编号生成页面</p><h2 id="使用静态文件部署-pxt" tabindex="-1">使用静态文件部署 PXT <a class="header-anchor" href="#使用静态文件部署-pxt" aria-hidden="true">#</a></h2><p>运行<code>pxt staticpkg</code>将创建许多<code>built/packaged</code>的文件。您可以使用<code>pxt serve -pkg</code>或任何其他任何 web 服务器。例如，您可以使用<a href="https://www.npmjs.com/package/http-server" target="_blank" rel="noreferrer">http-server</a>进行简单的测试。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm install -g http-server</span></span>
<span class="line"><span style="color:#A6ACCD;">http-server -c-1 built/packaged</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>您还可以运行<code>pxt staticcpkg--route foo</code>，它将在<code>built/packaged/foo</code>下创建文件，假设它们位于 web 服务器上的<code>/foo/</code>下。如果未指定任何内容，文件将假定它们位于<code>/</code>下。要测试它，请运行<code>pxt serve -pkg</code>并转到 <a href="http://localhost:3232/foo/index.html" target="_blank" rel="noreferrer">http://localhost:3232/foo/index.html</a>.</p><h2 id="github-pages支持" tabindex="-1"><a href="https://pages.github.com/" target="_blank" rel="noreferrer">GitHub Pages</a>支持 <a class="header-anchor" href="#github-pages支持" aria-hidden="true">#</a></h2><p>GitHub 为您的项目文件提供免费托管。</p><p>如果您希望将网站发布到 GitHub 页面，只需在命令中添加<code>--githubpages</code>即可。</p><p>这将：如果需要，在<code>built/gh-pages</code>页面中创建一个新的签出隐式运行 <code>pxt staticpkg --route repo-name</code>复制文件从<code>built/packaged/repo-name</code>到<code>built/gh-pages</code>将文件添加到 git、提交和推送</p><p>然后您可以前往 <a href="https://your-username.github.io/repo-name/" target="_blank" rel="noreferrer">https://your-username.github.io/repo-name/</a></p>`,29),l=[s];function p(c,o,h,n,d,u){return a(),t("div",null,l)}const k=e(r,[["render",p]]);export{b as __pageData,k as default};