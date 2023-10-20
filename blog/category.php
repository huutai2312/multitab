<?php
include_once __DIR__ . "/inc/head.home.php";
$sbl = $blog->show_blog();
if (isset($_GET['c'])) {
    $selectedCategory = $_GET['c'];
} else {
    // Nếu không có tham số 'c', thì gán giá trị mặc định hoặc rỗng (hiển thị tất cả danh mục)
    $selectedCategory = ''; // hoặc thay thế bằng giá trị mặc định của bạn
}
$sbl2 = $blog->show_blog_with_cat();
?>

<div class="spide_fn_content">
    <div class="spide_fn_pages">

        <div class="spide_fn_page_ajax">
            <div class="spide_fn_index" data-blog-item-color="disable" data-blog-meta-color="disable" data-blog-typog-color="disable">
                <!-- WITHOUT SIDEBAR -->
                <div class="spide_fn_nosidebar spide_fn_blognosidebar">
                    <div class="container">
                        <div class="fn__page_layout">
                            <?php
                            if (empty($selectedCategory)) {
                                echo "<h3>Danh mục: All</h3>";
                            } else {
                                echo "<h3>Danh mục: $selectedCategory</h3>";
                            }
                            ?>
                            <hr>

                            <ul class="fn__blog_list fn__blog_list_container_full fn__blog_list_layout_masonry">
                                <!-- == Tin thường == -->
                                <?php

                                if (isset($sbl2)) {
                                    if ($sbl2 && $sbl2->num_rows > 0) {
                                        $i = 0;
                                        while ($result = $sbl2->fetch_assoc()) {
                                            if ($result['showhide'] === 'show') {
                                                if (empty($selectedCategory) || $selectedCategory === $result['category']) {
                                ?>
                                                    <li class="post-79 post type-post status-publish format-standard has-post-thumbnail sticky hentry category-food category-health tag-blog tag-health tag-humor tag-image tag-writing post_item typography_disable" id="post-79">
                                                        <div class="blog__item blog__item_masonry blog__item_post_type_" style="--spide-cbc: #1dab06; --spide-ctc: #ffffff; --spide-cthc: #ffffff;">
                                                            <div class="list_decor">
                                                                <div class="decor_bottom"></div>
                                                                <div class="decor_left"></div>
                                                                <div class="decor_right"></div>
                                                            </div>
                                                            <div class="list_in">
                                                                <div class="list_left">
                                                                    <div class="list_left_in" style="border-radius: 25px; background-color: #fff">
                                                                        <div class="blog__image">
                                                                            <a href="" aria-label="H">
                                                                                <div class="img_overlay">
                                                                                    <a href="post.php?url=<?php echo $result['slug']; ?>">
                                                                                        <div class="img_in"><img src="<?php echo 'data:image/png;base64,' . base64_encode($result['img']); ?>" width="300" height="300" alt="21-300x300" loading="lazy"></div>
                                                                                    </a>
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div class="list_right" bis_skin_checked="1">
                                                                    <div class="catt_holder" bis_skin_checked="1">
                                                                        <div class="ch_in" bis_skin_checked="1">
                                                                            <div class="top_decor" bis_skin_checked="1"></div>
                                                                            <!-- <div class="post__views" bis_skin_checked="1"><span class="post_views" title="Views"><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet" class="fn__svg  replaced-svg">
                                            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" stroke="none">
                                              <path d="M2275 4194 c-631 -96 -1266 -455 -1865 -1054 -197 -197 -345 -370 -379 -440 -22 -46 -26 -69 -26 -140 0 -113 24 -162 151 -309 438 -508 1011 -946 1508 -1154 344 -143 604 -193 960 -184 339 8 607 75 951 237 401 187 882 553 1252 950 261 281 288 324 288 460 0 116 -23 162 -165 325 -384 440 -832 803 -1271 1029 -300 154 -557 241 -839 281 -131 18 -441 18 -565 -1z m477 -549 c146 -26 292 -84 423 -170 77 -50 250 -223 300 -300 125 -191 184 -386 185 -611 1 -357 -157 -673 -445 -889 -190 -143 -410 -215 -657 -215 -610 0 -1099 490 -1098 1099 1 296 100 545 300 755 119 125 246 212 393 270 66 26 192 61 252 69 70 10 276 5 347 -8z"></path>
                                              <path d="M2445 3340 c-193 -31 -373 -133 -495 -283 -62 -76 -133 -217 -157 -312 -24 -101 -22 -286 5 -386 75 -276 288 -487 572 -565 97 -27 290 -25 393 4 418 118 661 530 562 952 -21 89 -93 232 -155 307 -101 125 -271 233 -420 267 -84 20 -229 27 -305 16z"></path>
                                            </g>
                                          </svg></span><span class="count"><?php echo $result['view'] ?></span></span></div> -->
                                                                        </div>
                                                                        <div class="category__holder" style="--spide-cbc:#0072ff;--spide-ctc:#ffffff;--spide-cthc:#ffffff" bis_skin_checked="1"><a class=""><?php echo $result['category'] ?></a></div>
                                                                    </div>
                                                                    <div class="meta_holder" bis_skin_checked="1">
                                                                        <div class="meta__date" bis_skin_checked="1"><span class="text"><?php echo $result['date'] ?></span></div>
                                                                        <div class="meta__author" bis_skin_checked="1"><?php echo $result['author'] ?></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="title">
                                                                <h2 class="post__title"><a href="post.php?url=<?php echo $result['slug']; ?>" data-title="<?php echo $result['title'] ?>"><?php echo $result['title'] ?></a></h2>
                                                            </div>
                                                            <div class="desc desc_excerpt_field">
                                                                <p><?php echo $result['shortcontent'] ?></p>
                                                            </div>
                                                            <div class="fn__read_more">
                                                                <a href="post.php?url=<?php echo $result['slug']; ?>">Xem thêm</a>
                                                            </div>
                                                        </div>
                                                    </li>
                                        <?php
                                                }
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
                                <!-- == Tin thường == -->

                            </ul>

                            <!-- <div class="spide_fn_pagination">
                <div class="container">
                  <div class="pag_in">
                    <div class="pag_inner">
                      <ul>
                        <li class="active"><span class="current">Tải thêm</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div> -->
                        </div>
                    </div>
                </div><!-- /WITHOUT SIDEBAR -->
            </div>
        </div>

        <?php
        include_once __DIR__ . "/inc/footer.home.php";
        ?>