


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>jquery.inview/jquery.inview.js at master · protonet/jquery.inview · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="https://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <meta property="og:image" content="https://github.global.ssl.fastly.net/images/modules/logos_page/Octocat.png">
    <meta name="hostname" content="github-fe123-cp1-prd.iad.github.net">
    <meta name="ruby" content="ruby 1.9.3p194-tcs-github-tcmalloc (e1c0c3f392) [x86_64-linux]">
    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />
    


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="461B674E:4E6B:CD0DDA8:52BDB1A6" name="octolytics-dimension-request_id" />
    

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="lfZnPhIpeIVcEEdFoGbwy44pMyauBkU0+ZTlft69Evk=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-3944f96c1c19f752fe766b332fb7716555c8296e.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-5a80bdfa39bad96522873dfd72fa56c72e6675b3.css" media="all" rel="stylesheet" type="text/css" />
    

    

      <script src="https://github.global.ssl.fastly.net/assets/frameworks-29a3fb0547e33bd8d4530bbad9bae3ef00d83293.js" type="text/javascript"></script>
      <script src="https://github.global.ssl.fastly.net/assets/github-0b6bf4a8bb8bc8246eb6d07db6a63cde130f5001.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="affaac5ba4a5dec7537bc81ec484528d">

        <link data-pjax-transient rel='permalink' href='/protonet/jquery.inview/blob/b2a2681c7496966c284a4af193c9e40e5e8d7ee6/jquery.inview.js'>
  <meta property="og:title" content="jquery.inview"/>
  <meta property="og:type" content="githubog:gitrepository"/>
  <meta property="og:url" content="https://github.com/protonet/jquery.inview"/>
  <meta property="og:image" content="https://github.global.ssl.fastly.net/images/gravatars/gravatar-user-420.png"/>
  <meta property="og:site_name" content="GitHub"/>
  <meta property="og:description" content="jquery.inview - A jQuery plugin that adds a bindable &#39;inview&#39; event for detecting when an element is scrolled into view."/>

  <meta name="description" content="jquery.inview - A jQuery plugin that adds a bindable &#39;inview&#39; event for detecting when an element is scrolled into view." />

  <meta content="375656" name="octolytics-dimension-user_id" /><meta content="protonet" name="octolytics-dimension-user_login" /><meta content="1103175" name="octolytics-dimension-repository_id" /><meta content="protonet/jquery.inview" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="true" name="octolytics-dimension-repository_is_fork" /><meta content="561071" name="octolytics-dimension-repository_parent_id" /><meta content="zuk/jquery.inview" name="octolytics-dimension-repository_parent_nwo" /><meta content="561071" name="octolytics-dimension-repository_network_root_id" /><meta content="zuk/jquery.inview" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/protonet/jquery.inview/commits/master.atom" rel="alternate" title="Recent Commits to jquery.inview:master" type="application/atom+xml" />

  </head>


  <body class="logged_out  env-production windows vis-public fork page-blob">
    <div class="wrapper">
      
      
      
      


      
      <div class="header header-logged-out">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions">
        <a class="button primary" href="/join">Sign up</a>
      <a class="button signin" href="/login?return_to=%2Fprotonet%2Fjquery.inview%2Fblob%2Fmaster%2Fjquery.inview.js">Sign in</a>
    </div>

    <div class="command-bar js-command-bar  in-repository">

      <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
        <li class="features"><a href="/features">Features</a></li>
          <li class="enterprise"><a href="https://enterprise.github.com/">Enterprise</a></li>
          <li class="blog"><a href="/blog">Blog</a></li>
      </ul>
        <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    
      data-repo="protonet/jquery.inview"
      data-branch="master"
      data-sha="9db3a02e024c9d0c1d7ca6a45fc2b133217a94f6"
  >

    <input type="hidden" name="nwo" value="protonet/jquery.inview" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" title="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
    </div>

  </div>
</div>


      


          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">


  <li>
    <a href="/login?return_to=%2Fprotonet%2Fjquery.inview"
    class="minibutton with-count js-toggler-target star-button tooltipped upwards"
    title="You must be signed in to use this feature" rel="nofollow">
    <span class="octicon octicon-star"></span>Star
  </a>

    <a class="social-count js-social-count" href="/protonet/jquery.inview/stargazers">
      664
    </a>

  </li>

    <li>
      <a href="/login?return_to=%2Fprotonet%2Fjquery.inview"
        class="minibutton with-count js-toggler-target fork-button tooltipped upwards"
        title="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-git-branch"></span>Fork
      </a>
      <a href="/protonet/jquery.inview/network" class="social-count">
        184
      </a>
    </li>
</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/protonet" class="url fn" itemprop="url" rel="author"><span itemprop="title">protonet</span></a>
          </span>
          <span class="repohead-name-divider">/</span>
          <strong><a href="/protonet/jquery.inview" class="js-current-repository js-repo-home-link">jquery.inview</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

            <span class="fork-flag">
              <span class="text">forked from <a href="/zuk/jquery.inview">zuk/jquery.inview</a></span>
            </span>
        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      

      <div class="repository-with-sidebar repo-container  ">

        <div class="repository-sidebar">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped leftwards" title="Code">
        <a href="/protonet/jquery.inview" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /protonet/jquery.inview">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped leftwards" title="Issues">
          <a href="/protonet/jquery.inview/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /protonet/jquery.inview/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>13</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped leftwards" title="Pull Requests">
        <a href="/protonet/jquery.inview/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /protonet/jquery.inview/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>2</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped leftwards" title="Pulse">
        <a href="/protonet/jquery.inview/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /protonet/jquery.inview/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Graphs">
        <a href="/protonet/jquery.inview/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /protonet/jquery.inview/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Network">
        <a href="/protonet/jquery.inview/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /protonet/jquery.inview/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

            <div class="only-with-full-nav">
              

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/protonet/jquery.inview.git" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/protonet/jquery.inview.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/protonet/jquery.inview" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/protonet/jquery.inview" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="octicon help tooltipped upwards" title="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>


  <a href="http://windows.github.com" class="minibutton sidebar-button">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

              <a href="/protonet/jquery.inview/archive/master.zip"
                 class="minibutton sidebar-button"
                 title="Download this repository as a zip file"
                 rel="nofollow">
                <span class="octicon octicon-cloud-download"></span>
                Download ZIP
              </a>
            </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:f11cca73742a8ebdadd5f6d4e1c5bdaf -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/protonet/jquery.inview/find/master" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/protonet/jquery.inview/blob/master/jquery.inview.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/protonet/jquery.inview" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">jquery.inview</span></a></span></span><span class="separator"> / </span><strong class="final-path">jquery.inview.js</strong> <span class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="jquery.inview.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>



  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://1.gravatar.com/avatar/699eef3638894bbd03eb36ddf24edb10?d=https%3A%2F%2Fidenticons.github.com%2F4618e8cf338c6a1aff56a05befbfbd26.png&amp;r=x&amp;s=140" width="24" />
    <span class="author"><a href="/montanajob" rel="author">montanajob</a></span>
    <time class="js-relative-date" datetime="2013-11-15T10:01:56-08:00" title="2013-11-15 10:01:56">November 15, 2013</time>
    <div class="commit-title">
        <a href="/protonet/jquery.inview/commit/a947eccddc1013f908822275dbba23f4f17a7377" class="message" data-pjax="true" title="Make the setInterval call conditional based on whether any elements are ...

...actually listening to for the ‘invew’ event. Clear the interval if all elements are removed.">Make the setInterval call conditional based on whether any elements a…</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>6</strong> contributors</a></p>
          <a class="avatar tooltipped downwards" title="nugged" href="/protonet/jquery.inview/commits/master/jquery.inview.js?author=nugged"><img height="20" src="https://0.gravatar.com/avatar/2be46dd8674e774c95a399fbbba81363?d=https%3A%2F%2Fidenticons.github.com%2F03ed1e277628fb7855b0c2715c44b253.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="jturnbull" href="/protonet/jquery.inview/commits/master/jquery.inview.js?author=jturnbull"><img height="20" src="https://2.gravatar.com/avatar/02dbd4413957241b96708b46cda14a86?d=https%3A%2F%2Fidenticons.github.com%2F7322c71e66f72ebb1cf52d9a6abc90ca.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="tiff" href="/protonet/jquery.inview/commits/master/jquery.inview.js?author=tiff"><img height="20" src="https://1.gravatar.com/avatar/f4d2e3ebf33bc765070f9a4e3b345e91?d=https%3A%2F%2Fidenticons.github.com%2Fc75c42433daf2654fb56eeb13db3c8d6.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="montanajob" href="/protonet/jquery.inview/commits/master/jquery.inview.js?author=montanajob"><img height="20" src="https://1.gravatar.com/avatar/699eef3638894bbd03eb36ddf24edb10?d=https%3A%2F%2Fidenticons.github.com%2F4618e8cf338c6a1aff56a05befbfbd26.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="zuk" href="/protonet/jquery.inview/commits/master/jquery.inview.js?author=zuk"><img height="20" src="https://0.gravatar.com/avatar/e23fdd49cd6b944d3568b5439f703d79?d=https%3A%2F%2Fidenticons.github.com%2Ff1e3e5a26c6c13cf504e6dc8f7c140b0.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="naltatis" href="/protonet/jquery.inview/commits/master/jquery.inview.js?author=naltatis"><img height="20" src="https://1.gravatar.com/avatar/457365e2e75c27f3e1c3a3744f5c5e4b?d=https%3A%2F%2Fidenticons.github.com%2F1a47bfa2b4c2c07ebdbf98fea0e07c8a.png&amp;r=x&amp;s=140" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/2be46dd8674e774c95a399fbbba81363?d=https%3A%2F%2Fidenticons.github.com%2F03ed1e277628fb7855b0c2715c44b253.png&amp;r=x&amp;s=140" width="24" />
            <a href="/nugged">nugged</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/02dbd4413957241b96708b46cda14a86?d=https%3A%2F%2Fidenticons.github.com%2F7322c71e66f72ebb1cf52d9a6abc90ca.png&amp;r=x&amp;s=140" width="24" />
            <a href="/jturnbull">jturnbull</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/f4d2e3ebf33bc765070f9a4e3b345e91?d=https%3A%2F%2Fidenticons.github.com%2Fc75c42433daf2654fb56eeb13db3c8d6.png&amp;r=x&amp;s=140" width="24" />
            <a href="/tiff">tiff</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/699eef3638894bbd03eb36ddf24edb10?d=https%3A%2F%2Fidenticons.github.com%2F4618e8cf338c6a1aff56a05befbfbd26.png&amp;r=x&amp;s=140" width="24" />
            <a href="/montanajob">montanajob</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/e23fdd49cd6b944d3568b5439f703d79?d=https%3A%2F%2Fidenticons.github.com%2Ff1e3e5a26c6c13cf504e6dc8f7c140b0.png&amp;r=x&amp;s=140" width="24" />
            <a href="/zuk">zuk</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/457365e2e75c27f3e1c3a3744f5c5e4b?d=https%3A%2F%2Fidenticons.github.com%2F1a47bfa2b4c2c07ebdbf98fea0e07c8a.png&amp;r=x&amp;s=140" width="24" />
            <a href="/naltatis">naltatis</a>
          </li>
      </ul>
    </div>
  </div>

<div id="files" class="bubble">
  <div class="file">
    <div class="meta">
      <div class="info">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
          <span>136 lines (119 sloc)</span>
        <span>5.231 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
            <a class="minibutton tooltipped leftwards"
               href="http://windows.github.com" title="Open this file in GitHub for Windows">
                <span class="octicon octicon-device-desktop"></span> Open
            </a>
              <a class="minibutton disabled tooltipped leftwards" href="#"
                 title="You must be signed in to make or propose changes">Edit</a>
          <a href="/protonet/jquery.inview/raw/master/jquery.inview.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/protonet/jquery.inview/blame/master/jquery.inview.js" class="button minibutton ">Blame</a>
          <a href="/protonet/jquery.inview/commits/master/jquery.inview.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
          <a class="minibutton danger disabled empty-icon tooltipped leftwards" href="#"
             title="You must be signed in to make or propose changes">
          Delete
        </a>
      </div><!-- /.actions -->

    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
        <table class="file-code file-diff">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>

            </td>
            <td class="blob-line-code">
                    <div class="code-body highlight"><pre><div class='line' id='LC1'><span class="cm">/**</span></div><div class='line' id='LC2'><span class="cm"> * author Christopher Blum</span></div><div class='line' id='LC3'><span class="cm"> *    - based on the idea of Remy Sharp, http://remysharp.com/2009/01/26/element-in-view-event-plugin/</span></div><div class='line' id='LC4'><span class="cm"> *    - forked from http://github.com/zuk/jquery.inview/</span></div><div class='line' id='LC5'><span class="cm"> */</span></div><div class='line' id='LC6'><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">$</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC7'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">inviewObjects</span> <span class="o">=</span> <span class="p">{},</span> <span class="nx">viewportSize</span><span class="p">,</span> <span class="nx">viewportOffset</span><span class="p">,</span></div><div class='line' id='LC8'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">d</span> <span class="o">=</span> <span class="nb">document</span><span class="p">,</span> <span class="nx">w</span> <span class="o">=</span> <span class="nb">window</span><span class="p">,</span> <span class="nx">documentElement</span> <span class="o">=</span> <span class="nx">d</span><span class="p">.</span><span class="nx">documentElement</span><span class="p">,</span> <span class="nx">expando</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">expando</span><span class="p">,</span> <span class="nx">timer</span><span class="p">;</span></div><div class='line' id='LC9'><br/></div><div class='line' id='LC10'>&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nx">special</span><span class="p">.</span><span class="nx">inview</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC11'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">add</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC12'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">inviewObjects</span><span class="p">[</span><span class="nx">data</span><span class="p">.</span><span class="nx">guid</span> <span class="o">+</span> <span class="s2">&quot;-&quot;</span> <span class="o">+</span> <span class="k">this</span><span class="p">[</span><span class="nx">expando</span><span class="p">]]</span> <span class="o">=</span> <span class="p">{</span> <span class="nx">data</span><span class="o">:</span> <span class="nx">data</span><span class="p">,</span> <span class="nx">$element</span><span class="o">:</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">)</span> <span class="p">};</span></div><div class='line' id='LC13'><br/></div><div class='line' id='LC14'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Use setInterval in order to also make sure this captures elements within</span></div><div class='line' id='LC15'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// &quot;overflow:scroll&quot; elements or elements that appeared in the dom tree due to</span></div><div class='line' id='LC16'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// dom manipulation and reflow</span></div><div class='line' id='LC17'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// old: $(window).scroll(checkInView);</span></div><div class='line' id='LC18'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//</span></div><div class='line' id='LC19'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// By the way, iOS (iPad, iPhone, ...) seems to not execute, or at least delays</span></div><div class='line' id='LC20'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// intervals while the user scrolls. Therefore the inview event might fire a bit late there</span></div><div class='line' id='LC21'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// </span></div><div class='line' id='LC22'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Don&#39;t waste cycles with an interval until we get at least one element that</span></div><div class='line' id='LC23'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// has bound to the inview event.  </span></div><div class='line' id='LC24'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">timer</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">$</span><span class="p">.</span><span class="nx">isEmptyObject</span><span class="p">(</span><span class="nx">inviewObjects</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC25'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">timer</span> <span class="o">=</span> <span class="nx">setInterval</span><span class="p">(</span><span class="nx">checkInView</span><span class="p">,</span> <span class="mi">250</span><span class="p">);</span></div><div class='line' id='LC26'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC27'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC28'><br/></div><div class='line' id='LC29'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">remove</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC30'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">try</span> <span class="p">{</span> <span class="k">delete</span> <span class="nx">inviewObjects</span><span class="p">[</span><span class="nx">data</span><span class="p">.</span><span class="nx">guid</span> <span class="o">+</span> <span class="s2">&quot;-&quot;</span> <span class="o">+</span> <span class="k">this</span><span class="p">[</span><span class="nx">expando</span><span class="p">]];</span> <span class="p">}</span> <span class="k">catch</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{}</span></div><div class='line' id='LC31'><br/></div><div class='line' id='LC32'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Clear interval when we no longer have any elements listening</span></div><div class='line' id='LC33'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">isEmptyObject</span><span class="p">(</span><span class="nx">inviewObjects</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC34'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">clearInterval</span><span class="p">(</span><span class="nx">timer</span><span class="p">);</span></div><div class='line' id='LC35'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">timer</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC36'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC37'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC38'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC39'><br/></div><div class='line' id='LC40'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">getViewportSize</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC41'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">mode</span><span class="p">,</span> <span class="nx">domObject</span><span class="p">,</span> <span class="nx">size</span> <span class="o">=</span> <span class="p">{</span> <span class="nx">height</span><span class="o">:</span> <span class="nx">w</span><span class="p">.</span><span class="nx">innerHeight</span><span class="p">,</span> <span class="nx">width</span><span class="o">:</span> <span class="nx">w</span><span class="p">.</span><span class="nx">innerWidth</span> <span class="p">};</span></div><div class='line' id='LC42'><br/></div><div class='line' id='LC43'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// if this is correct then return it. iPad has compat Mode, so will</span></div><div class='line' id='LC44'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// go into check clientHeight/clientWidth (which has the wrong value).</span></div><div class='line' id='LC45'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">size</span><span class="p">.</span><span class="nx">height</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC46'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">mode</span> <span class="o">=</span> <span class="nx">d</span><span class="p">.</span><span class="nx">compatMode</span><span class="p">;</span></div><div class='line' id='LC47'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">mode</span> <span class="o">||</span> <span class="o">!</span><span class="nx">$</span><span class="p">.</span><span class="nx">support</span><span class="p">.</span><span class="nx">boxModel</span><span class="p">)</span> <span class="p">{</span> <span class="c1">// IE, Gecko</span></div><div class='line' id='LC48'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">domObject</span> <span class="o">=</span> <span class="nx">mode</span> <span class="o">===</span> <span class="s1">&#39;CSS1Compat&#39;</span> <span class="o">?</span></div><div class='line' id='LC49'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">documentElement</span> <span class="o">:</span> <span class="c1">// Standards</span></div><div class='line' id='LC50'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">d</span><span class="p">.</span><span class="nx">body</span><span class="p">;</span> <span class="c1">// Quirks</span></div><div class='line' id='LC51'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">size</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC52'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">height</span><span class="o">:</span> <span class="nx">domObject</span><span class="p">.</span><span class="nx">clientHeight</span><span class="p">,</span></div><div class='line' id='LC53'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">width</span><span class="o">:</span>  <span class="nx">domObject</span><span class="p">.</span><span class="nx">clientWidth</span></div><div class='line' id='LC54'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC55'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC56'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC57'><br/></div><div class='line' id='LC58'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">size</span><span class="p">;</span></div><div class='line' id='LC59'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC60'><br/></div><div class='line' id='LC61'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">getViewportOffset</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC62'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">{</span></div><div class='line' id='LC63'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">top</span><span class="o">:</span>  <span class="nx">w</span><span class="p">.</span><span class="nx">pageYOffset</span> <span class="o">||</span> <span class="nx">documentElement</span><span class="p">.</span><span class="nx">scrollTop</span>   <span class="o">||</span> <span class="nx">d</span><span class="p">.</span><span class="nx">body</span><span class="p">.</span><span class="nx">scrollTop</span><span class="p">,</span></div><div class='line' id='LC64'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">left</span><span class="o">:</span> <span class="nx">w</span><span class="p">.</span><span class="nx">pageXOffset</span> <span class="o">||</span> <span class="nx">documentElement</span><span class="p">.</span><span class="nx">scrollLeft</span>  <span class="o">||</span> <span class="nx">d</span><span class="p">.</span><span class="nx">body</span><span class="p">.</span><span class="nx">scrollLeft</span></div><div class='line' id='LC65'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC66'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC67'><br/></div><div class='line' id='LC68'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">checkInView</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC69'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">$elements</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(),</span> <span class="nx">elementsLength</span><span class="p">,</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC70'><br/></div><div class='line' id='LC71'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">inviewObjects</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">i</span><span class="p">,</span> <span class="nx">inviewObject</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC72'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">selector</span>  <span class="o">=</span> <span class="nx">inviewObject</span><span class="p">.</span><span class="nx">data</span><span class="p">.</span><span class="nx">selector</span><span class="p">,</span></div><div class='line' id='LC73'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$element</span>  <span class="o">=</span> <span class="nx">inviewObject</span><span class="p">.</span><span class="nx">$element</span><span class="p">;</span></div><div class='line' id='LC74'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$elements</span> <span class="o">=</span> <span class="nx">$elements</span><span class="p">.</span><span class="nx">add</span><span class="p">(</span><span class="nx">selector</span> <span class="o">?</span> <span class="nx">$element</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="nx">selector</span><span class="p">)</span> <span class="o">:</span> <span class="nx">$element</span><span class="p">);</span></div><div class='line' id='LC75'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC76'><br/></div><div class='line' id='LC77'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">elementsLength</span> <span class="o">=</span> <span class="nx">$elements</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC78'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">elementsLength</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC79'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">viewportSize</span>   <span class="o">=</span> <span class="nx">viewportSize</span>   <span class="o">||</span> <span class="nx">getViewportSize</span><span class="p">();</span></div><div class='line' id='LC80'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">viewportOffset</span> <span class="o">=</span> <span class="nx">viewportOffset</span> <span class="o">||</span> <span class="nx">getViewportOffset</span><span class="p">();</span></div><div class='line' id='LC81'><br/></div><div class='line' id='LC82'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(;</span> <span class="nx">i</span><span class="o">&lt;</span><span class="nx">elementsLength</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC83'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Ignore elements that are not in the DOM tree</span></div><div class='line' id='LC84'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">$</span><span class="p">.</span><span class="nx">contains</span><span class="p">(</span><span class="nx">documentElement</span><span class="p">,</span> <span class="nx">$elements</span><span class="p">[</span><span class="nx">i</span><span class="p">]))</span> <span class="p">{</span></div><div class='line' id='LC85'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">continue</span><span class="p">;</span></div><div class='line' id='LC86'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC87'><br/></div><div class='line' id='LC88'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">$element</span>      <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">$elements</span><span class="p">[</span><span class="nx">i</span><span class="p">]),</span></div><div class='line' id='LC89'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">elementSize</span>   <span class="o">=</span> <span class="p">{</span> <span class="nx">height</span><span class="o">:</span> <span class="nx">$element</span><span class="p">.</span><span class="nx">height</span><span class="p">(),</span> <span class="nx">width</span><span class="o">:</span> <span class="nx">$element</span><span class="p">.</span><span class="nx">width</span><span class="p">()</span> <span class="p">},</span></div><div class='line' id='LC90'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">elementOffset</span> <span class="o">=</span> <span class="nx">$element</span><span class="p">.</span><span class="nx">offset</span><span class="p">(),</span></div><div class='line' id='LC91'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">inView</span>        <span class="o">=</span> <span class="nx">$element</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;inview&#39;</span><span class="p">),</span></div><div class='line' id='LC92'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">visiblePartX</span><span class="p">,</span></div><div class='line' id='LC93'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">visiblePartY</span><span class="p">,</span></div><div class='line' id='LC94'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">visiblePartsMerged</span><span class="p">;</span></div><div class='line' id='LC95'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC96'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Don&#39;t ask me why because I haven&#39;t figured out yet:</span></div><div class='line' id='LC97'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// viewportOffset and viewportSize are sometimes suddenly null in Firefox 5.</span></div><div class='line' id='LC98'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Even though it sounds weird:</span></div><div class='line' id='LC99'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// It seems that the execution of this function is interferred by the onresize/onscroll event</span></div><div class='line' id='LC100'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// where viewportOffset and viewportSize are unset</span></div><div class='line' id='LC101'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">viewportOffset</span> <span class="o">||</span> <span class="o">!</span><span class="nx">viewportSize</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC102'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC103'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC104'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC105'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">elementOffset</span><span class="p">.</span><span class="nx">top</span> <span class="o">+</span> <span class="nx">elementSize</span><span class="p">.</span><span class="nx">height</span> <span class="o">&gt;</span> <span class="nx">viewportOffset</span><span class="p">.</span><span class="nx">top</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC106'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">elementOffset</span><span class="p">.</span><span class="nx">top</span> <span class="o">&lt;</span> <span class="nx">viewportOffset</span><span class="p">.</span><span class="nx">top</span> <span class="o">+</span> <span class="nx">viewportSize</span><span class="p">.</span><span class="nx">height</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC107'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">elementOffset</span><span class="p">.</span><span class="nx">left</span> <span class="o">+</span> <span class="nx">elementSize</span><span class="p">.</span><span class="nx">width</span> <span class="o">&gt;</span> <span class="nx">viewportOffset</span><span class="p">.</span><span class="nx">left</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC108'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">elementOffset</span><span class="p">.</span><span class="nx">left</span> <span class="o">&lt;</span> <span class="nx">viewportOffset</span><span class="p">.</span><span class="nx">left</span> <span class="o">+</span> <span class="nx">viewportSize</span><span class="p">.</span><span class="nx">width</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC109'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">visiblePartX</span> <span class="o">=</span> <span class="p">(</span><span class="nx">viewportOffset</span><span class="p">.</span><span class="nx">left</span> <span class="o">&gt;</span> <span class="nx">elementOffset</span><span class="p">.</span><span class="nx">left</span> <span class="o">?</span></div><div class='line' id='LC110'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;right&#39;</span> <span class="o">:</span> <span class="p">(</span><span class="nx">viewportOffset</span><span class="p">.</span><span class="nx">left</span> <span class="o">+</span> <span class="nx">viewportSize</span><span class="p">.</span><span class="nx">width</span><span class="p">)</span> <span class="o">&lt;</span> <span class="p">(</span><span class="nx">elementOffset</span><span class="p">.</span><span class="nx">left</span> <span class="o">+</span> <span class="nx">elementSize</span><span class="p">.</span><span class="nx">width</span><span class="p">)</span> <span class="o">?</span></div><div class='line' id='LC111'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;left&#39;</span> <span class="o">:</span> <span class="s1">&#39;both&#39;</span><span class="p">);</span></div><div class='line' id='LC112'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">visiblePartY</span> <span class="o">=</span> <span class="p">(</span><span class="nx">viewportOffset</span><span class="p">.</span><span class="nx">top</span> <span class="o">&gt;</span> <span class="nx">elementOffset</span><span class="p">.</span><span class="nx">top</span> <span class="o">?</span></div><div class='line' id='LC113'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;bottom&#39;</span> <span class="o">:</span> <span class="p">(</span><span class="nx">viewportOffset</span><span class="p">.</span><span class="nx">top</span> <span class="o">+</span> <span class="nx">viewportSize</span><span class="p">.</span><span class="nx">height</span><span class="p">)</span> <span class="o">&lt;</span> <span class="p">(</span><span class="nx">elementOffset</span><span class="p">.</span><span class="nx">top</span> <span class="o">+</span> <span class="nx">elementSize</span><span class="p">.</span><span class="nx">height</span><span class="p">)</span> <span class="o">?</span></div><div class='line' id='LC114'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;top&#39;</span> <span class="o">:</span> <span class="s1">&#39;both&#39;</span><span class="p">);</span></div><div class='line' id='LC115'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">visiblePartsMerged</span> <span class="o">=</span> <span class="nx">visiblePartX</span> <span class="o">+</span> <span class="s2">&quot;-&quot;</span> <span class="o">+</span> <span class="nx">visiblePartY</span><span class="p">;</span></div><div class='line' id='LC116'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">inView</span> <span class="o">||</span> <span class="nx">inView</span> <span class="o">!==</span> <span class="nx">visiblePartsMerged</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC117'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$element</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;inview&#39;</span><span class="p">,</span> <span class="nx">visiblePartsMerged</span><span class="p">).</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;inview&#39;</span><span class="p">,</span> <span class="p">[</span><span class="kc">true</span><span class="p">,</span> <span class="nx">visiblePartX</span><span class="p">,</span> <span class="nx">visiblePartY</span><span class="p">]);</span></div><div class='line' id='LC118'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC119'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">inView</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC120'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$element</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;inview&#39;</span><span class="p">,</span> <span class="kc">false</span><span class="p">).</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;inview&#39;</span><span class="p">,</span> <span class="p">[</span><span class="kc">false</span><span class="p">]);</span></div><div class='line' id='LC121'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC122'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC123'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC124'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC125'><br/></div><div class='line' id='LC126'>&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="nx">w</span><span class="p">).</span><span class="nx">bind</span><span class="p">(</span><span class="s2">&quot;scroll resize&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC127'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">viewportSize</span> <span class="o">=</span> <span class="nx">viewportOffset</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC128'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC129'>&nbsp;&nbsp;</div><div class='line' id='LC130'>&nbsp;&nbsp;<span class="c1">// IE &lt; 9 scrolls to focused elements without firing the &quot;scroll&quot; event</span></div><div class='line' id='LC131'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">documentElement</span><span class="p">.</span><span class="nx">addEventListener</span> <span class="o">&amp;&amp;</span> <span class="nx">documentElement</span><span class="p">.</span><span class="nx">attachEvent</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC132'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">documentElement</span><span class="p">.</span><span class="nx">attachEvent</span><span class="p">(</span><span class="s2">&quot;onfocusin&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC133'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">viewportOffset</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC134'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC135'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC136'><span class="p">})(</span><span class="nx">jQuery</span><span class="p">);</span></div></pre></div>
            </td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2013 <span title="0.02071s from github-fe123-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/protonet/jquery.inview/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

  </body>
</html>

