<?php
include_once __DIR__ . "/inc/head.detail.post.php";
$blog = new blog();
$url = $_GET['url'];
$blog1 = $blog->show_blog();
$cat_blog = new blog_category();
$scbl = $cat_blog->show_blog_category();


?>
<?php
if (isset($blog1)) {
  if ($blog1 && $blog1->num_rows > 0) {
    $i = 0;
    while ($result = $blog1->fetch_assoc()) {
      if ($result['slug'] == $url) {

?>
        <div class="spide_fn_content">
          <div class="spide_fn_pages">
            <div class="spide_fn_page_ajax">
              <div class="spide_fn_singlepost">
                <div class="container">
                  <div class="spide_fn_singleajax">
                    <div class="spide_fn_blog_single" data-page-style="ws" data-post-id="105" data-get-post-id="101">
                      <div class="spide_fn_single">
                        <div class="spide_fn_hassidebar">
                          <div class="sidebar__inner">
                            <div class="sidebarpage">
                              <div class="spide_fn_leftsidebar">
                                <div class="single__content">
                                  <div class="content_holder">
                                    <div class="post__header">
                                      <div class="phr_top">
                                        <div class="post_top_in">
                                          <div class="post_top_content">
                                            <div class="fn__image_format">
                                              <img src="<?php echo 'data:image/png;base64,' . base64_encode($result['img']); ?>" sizes="(max-width: 1280px) 100vw, 1280px" alt="03-b" width="1280" height="853" loading="lazy" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="phr_middle">
                                        <div class="category__holder" style="
                                          --spide-cbc: #cb05dd;
                                          --spide-ctc: #ffffff;
                                          --spide-cthc: #ffffff;
                                        ">
                                          <a class="" href=""><?php echo $result['category'] ?></a>
                                        </div>
                                        <div class="meta_holder">
                                          <span class="meta__date"><span class="text"><?php echo $result['date'] ?></span></span>
                                          <span class="separator">-</span>
                                          <span class="meta__author"><?php echo $result['author'] ?></span>
                                          <!-- <span class="separator">-</span>
                                          <span class="meta__view"><?php echo $result['view'] ?> Lượt xem</span> -->
                                        </div>
                                        <h2 class="fn__maintitle">
                                          <?php echo $result['title'] ?>
                                        </h2>
                                        <div class="info_holder">
                                          <div class="spide_fn_share">
                                            <div class="share_wrapper">
                                              <div class="share_wrap">
                                                <h5 class="label">Share</h5>
                                                <ul>
                                                  <li>
                                                    <a href="http://www.facebook.com/share.php?u=" target="_blank" title="Facebook" aria-label="Share the post on facebook"><img class="fn__svg" src="https://frenify.com/work/envato/frenify/wp/spide/1/wp-content/themes/spide/framework/svg/social/facebook.svg" alt="svg" /></a>
                                                  </li>
                                                  <li>
                                                    <a href="https://twitter.com/share?url=" target="_blank" title="Twitter" aria-label="Share the post on twitter"><img class="fn__svg" src="https://frenify.com/work/envato/frenify/wp/spide/1/wp-content/themes/spide/framework/svg/social/twitter.svg" alt="svg" /></a>
                                                  </li>
                                                  <li>
                                                    <a href="https://www.vk.com/share.php?url=" target="_blank" title="VKontakte" aria-label="Share the post on vk"><img class="fn__svg" src="https://frenify.com/work/envato/frenify/wp/spide/1/wp-content/themes/spide/framework/svg/social/vk.svg" alt="svg" /></a>
                                                  </li>
                                                </ul>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="post_content_wrap">
                                      <div class="post_content">
                                        <div class="post_c_in">
                                          <p id="84c3">
                                            <?php echo $result['content'] ?>
                                          </p>
                                          <div class="clearfix"></div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="spide_fn_comments" hidden=""></div>
                              </div>
                              <div class="spide_fn_rightsidebar">
                                <div class="sidebar_in">
                                  <div class="spide_fn_sidebar">

                                    <div id="spide_custom_categories-2" class="widget_block clearfix widget_spide_custom_categories" bis_skin_checked="1">
                                      <div class="wid-title" bis_skin_checked="1"><span class="tl_wing"></span><span class="tr_wing"></span><span class="text"><span>Danh mục</span></span></div>
                                      <div class="spide_fn_ccategories" bis_skin_checked="1">
                                        <ul>
                                          <li style="--spide-cbc:#ec345a;--spide-ctc:#ffffff">
                                            <div class="category__item" bis_skin_checked="1"><a class="full_link" href="category.php"></a><span class="cat_title"><span class="name">Tất cả</span></span></div>
                                          </li>
                                          <?php
                                          if (isset($scbl)) {
                                            if ($scbl && $scbl->num_rows > 0) {
                                              while ($result = $scbl->fetch_assoc()) {
                                          ?>

                                                <li style="--spide-cbc:#ec345a;--spide-ctc:#ffffff">
                                                  <div class="category__item" bis_skin_checked="1"><a class="full_link" href="category.php?c=<?php echo $result['slug'] ?>"></a><span class="cat_title"><span class="name"><?php echo $result['name'] ?></span></span></div>
                                                </li>
                                              <?php
                                              }
                                            } else {
                                              ?>
                                            <?php
                                            }
                                          } else {
                                            ?>
                                          <?php
                                          }
                                          ?>

                                        </ul>
                                      </div>
                                    </div>



                                    <div id="spide_top_articles-2" class="widget_block clearfix widget_spide_top_articles" bis_skin_checked="1">
                                      <div class="wid-title" bis_skin_checked="1"><span class="tl_wing"></span><span class="tr_wing"></span><span class="text"><span>Bài viết mới</span></span></div>
                                      <?php
                                      $sbl1 = $blog->show_blog_limit4_inpost();

                                      if (isset($sbl1)) {
                                        if ($sbl1 && $sbl1->num_rows > 0) {
                                          $i = 0;
                                          while ($result = $sbl1->fetch_assoc()) {
                                            if ($result['showhide'] === 'show') {
                                      ?>
                                              <div class="spide_fn_widget__articles" bis_skin_checked="1">
                                                <div class="item has_img" title="<?php echo $result['title'] ?>" bis_skin_checked="1"><a class="full_link" href="post.php?url=<?php echo $result['slug'] ?>"></a>
                                                  <div class="item_img" bis_skin_checked="1">
                                                    <div class="img_in frenify-ready" data-bg-img="<?php echo 'data:image/png;base64,' . base64_encode($result['img']); ?>" style="background-image: url(&quot;<?php echo 'data:image/png;base64,' . base64_encode($result['img']); ?>&quot;);" bis_skin_checked="1"></div>
                                                  </div>
                                                  <div class="title_holder" bis_skin_checked="1">
                                                    <h3 class="fn_title"><span><a href="post.php?url=<?php echo $result['slug'] ?>"><?php echo $result['title'] ?></a></span></h3>
                                                    <div class="post_date" bis_skin_checked="1"><span><?php echo $result['date'] ?></span></div>
                                                  </div>
                                                </div>
                                              </div>
                                          <?php
                                            } else {
                                            }
                                          }
                                        } else {
                                          ?>
                                        <?php
                                        }
                                      } else {
                                        ?>
                                      <?php
                                      }
                                      ?>
                                    </div>



                                    <div id="spide_author-2" class="widget_block clearfix widget_spide_author">
                                      <div class="wid-title">
                                        <span class="text"><span>Giới thiệu</span></span>
                                      </div>
                                      <div class="spide_fn_widget_author">
                                        <div class="img__holder">
                                          <div class="img">
                                            <a class="full_link" href=""></a>
                                            <div class="img_in">
                                              <img src="public/assets/img/385785760_1278880840177951_9005917071521131379_n.jpg" alt="profile-300x300" />
                                            </div>
                                          </div>
                                        </div>
                                        <div class="info_desc">
                                          <div class="author_top">
                                            <h3 class="fn_title">
                                              <a href="https://www.facebook.com/nht22331122" target="_blank">NH Tài 💻🍓</a>
                                            </h3>
                                          </div>
                                          <div class="author_bottom">
                                            <ul class="author_social">
                                              <li>
                                                <a title="Facebook" href="https://www.facebook.com/nht22331122"><img class="fn__svg icon_facebook" src="https://frenify.com/work/envato/frenify/wp/spide/1/wp-content/themes/spide/framework/svg/social/facebook.svg" alt="facebook" /></a>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>





                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        <?php
      }

      $i++;
    }
  } else {
        ?>
    <?php
  }
} ?>
    <?php
    include_once __DIR__ . "/inc/footer.detail.post.php";
    ?>