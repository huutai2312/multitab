<?php
include_once __DIR__ . "/../classes/class.brain.php";
$blog = new blog();
$cat_blog = new blog_category();
$scbl = $cat_blog->show_blog_category();
$scbl1 = $cat_blog->show_blog_category();
$scbl2 = $cat_blog->show_blog_category();
?>

<!DOCTYPE html>
<html lang="vi">
 
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5">
    <meta name="description" content="">
    <title>Blog - NHT</title>
    <link rel="shortcut icon" href="public/assets/img/logo_blog_dark.png" type="image/x-icon">
    <meta name="robots" content="max-image-preview:large">
    <link rel="dns-prefetch" href="//fonts.googleapis.com">
    <link href="https://fonts.gstatic.com" crossorigin="" rel="preconnect">
    <link rel="stylesheet" id="wp-block-library-css" href="public/assets/css/style.min.css" type="text/css" media="all">
    <link id="global-styles-inline-css" rel="stylesheet" href="public/assets/css/global.css" type="text/css" media="all">
    <link rel="stylesheet" id="redux-extendify-styles-css" href="public/assets/css/extendify-utilities.css" type="text/css" media="all">
    <link rel="stylesheet" id="contact-form-7-css" href="public/assets/css/styles.css" type="text/css" media="all">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet">
    <link rel="stylesheet" id="spide-fn-base-css" href="public/assets/css/base.css" type="text/css" media="all">
    <link rel="stylesheet" id="magnific.popup-css" href="public/assets/css/magnific.popup.css" type="text/css" media="all">
    <link rel="stylesheet" id="owl-carousel-css" href="public/assets/css/owl.carousel.css" type="text/css" media="all">
    <link rel="stylesheet" id="owl-theme-default-css" href="public/assets/css/owl.theme.default.css" type="text/css" media="all">
    <link rel="stylesheet" id="spide-fn-widgets-css" href="public/assets/css/widgets.css" type="text/css" media="all">
    <link rel="stylesheet" id="spide-fn-stylesheet-css" href="public/assets/css/style.css" type="text/css" media="all">
    <link rel="stylesheet" id="spide_fn_inline-css" href="public/assets/css/inline.css" type="text/css" media="all">
    <link id="spide_fn_inline-inline-css" rel="stylesheet" href="public/assets/css/cursor.css" type="text/css" media="all">
    <link id="spide_fn_option-dynamic-css" title="dynamic-css" class="redux-options-output" href="public/assets/css/redux.css">
    <script type="text/javascript" src="public/assets/js/jquery.min.js" id="jquery-core-js"></script>
    <script type="text/javascript" src="public/assets/js/jquery-migrate.min.js" id="jquery-migrate-js"></script>
</head>

<body class="page-template page-template-page-blog page-template-page-blog-php page page-id-212 page-container-full">
    <div class="clearfix"></div><!-- HTML starts here -->
    <div class="spide-fn-wrapper core_ready">
        <!-- Header starts here --> 
        <!-- Header ends here -->
        <!-- Header starts here -->
        <!-- Header -->
        <header id="spide_fn_header" class="menu_enabled">
            <div class="spide_fn_header">
                <div class="header_top">
                    <div class="ht_helpful" data-left-side="1" data-right-side="2">
                        <div class="container">
                            <div class="ht_helpful_in">
                                <div class="ht_left">
                                    <div class="ht_left_item">
                                        <div class="spide_fn_social_list">
                                            <ul>
                                                <li>
                                                    <a title="facebook" href="https://www.facebook.com/nht22331122" target="_blank"><img class="fn__svg" src="https://frenify.com/work/envato/frenify/wp/spide/1/wp-content/themes/spide/framework/svg/social/facebook.svg" alt="svg"></a>
                                                </li>
                                                <li>
                                                    <a title="twitter" href="https://twitter.com/" target="_blank"><img class="fn__svg" src="https://frenify.com/work/envato/frenify/wp/spide/1/wp-content/themes/spide/framework/svg/social/twitter.svg" alt="svg"></a>
                                                </li>
                                                <li>
                                                    <a title="youtube" href="https://www.youtube.com/" target="_blank"><img class="fn__svg" src="https://frenify.com/work/envato/frenify/wp/spide/1/wp-content/themes/spide/framework/svg/social/youtube.svg" alt="svg"></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="logo">
                        <div class="container">
                            <div class="logo_in">
                                <a href="./" aria-label="Go to home page"><img class="retina_logo" src="public/assets/img/logo_blog_dark.png" alt="logo"><img class="desktop_logo" src="public/assets/img/logo_blog_dark.png" alt="logo"></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="header_bottom">
                    <div class="container">
                        <div class="hb_in">
                            <div class="bottom_fixer">
                                <div class="spide_fn_nav main_nav">
                                    <div class="menu">
                                        <div class="menu-main-menu-container">
                                            <ul id="menu-main-menu" class="spide_fn_main_nav">
                                                <li id="menu-item-205" class="menu-item menu-item-type-post_type menu-item-object-page current-menu-ancestor current_page_ancestor menu-item-205">
                                                    <a href="./"><span><span>Trang chủ</span></span></a>
                                                </li>
                                                <li id="menu-item-118" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-118">
                                                    <a href="category.php"><span><span>Danh mục</span></span></a>
                                                    <ul class="sub-menu">
                                                        <?php
                                                        if (isset($scbl)) {
                                                            if ($scbl && $scbl->num_rows > 0) {
                                                                while ($result = $scbl->fetch_assoc()) {
                                                        ?>
                                                                    <li id="menu-item-236" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-236">
                                                                        <a href="category.php?c=<?php echo $result['slug'] ?>"><span><span><?php echo $result['name'] ?></span></span></a>
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
                                                </li>
                                                <li id="menu-item-250" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-250">
                                                    <a href="http://multitab.io.vn"><span><span>Multitab</span></span></a>
                                                </li>
                                                <li id="menu-item-250" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-250">
                                                    <a href="contact.php"><span><span>Liên hệ</span></span></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="more">
                                            <a href="#"><span>More...</span></a>
                                            <ul class="sub-menu">
                                                <!-- Comes from JS -->
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header><!-- !Header -->
        <div class="spide_fn_stickynav ajax_enable">
            <div class="container">
                <div class="transform_hedaer">
                    <div class="sticky_header">
                        <div class="spide_fn_nav sticky_nav">
                            <div class="menu">
                                <div class="menu-main-menu-container">
                                    <ul id="menu-main-menu" class="spide_fn_main_nav">
                                        <li id="menu-item-205" class="menu-item menu-item-type-post_type menu-item-object-page current-menu-ancestor current_page_ancestor menu-item-205">
                                            <a href="./"><span><span>Trang chủ</span></span></a>
                                        </li>
                                        <li id="menu-item-118" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-118">
                                            <a href="category.php"><span><span>Danh mục</span></span></a>
                                            <ul class="sub-menu">
                                                <?php
                                                if (isset($scbl1)) {
                                                    if ($scbl1 && $scbl1->num_rows > 0) {
                                                        while ($result = $scbl1->fetch_assoc()) {
                                                ?>
                                                            <li id="menu-item-236" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-236">
                                                                <a href="category.php?c=<?php echo $result['slug'] ?>"><span><span><?php echo $result['name'] ?></span></span></a>
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
                                        </li>
                                        <li id="menu-item-250" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-250">
                                            <a href="http://multitab.io.vn"><span><span>Multitab</span></span></a>
                                        </li>
                                        <li id="menu-item-250" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-250">
                                            <a href="contact.php"><span><span>Liên hệ</span></span></a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="more">
                                    <a href="#"><span>More...</span></a>
                                    <ul class="sub-menu">
                                        <!-- Comes from JS -->
                                    </ul>
                                </div>
                            </div>
                            <div class="icon_bar">
                                <div class="icon_bar__item icon_bar__share">
                                    <a href="#" aria-label="Share"><img class="fn__svg" src="https://frenify.com/work/envato/frenify/wp/spide/1/wp-content/themes/spide/framework/svg/share.svg" alt="svg"></a>
                                    <div class="spide_fn_social_list">
                                        <ul>
                                            <li>
                                                <a title="facebook" href="https://www.facebook.com/nht22331122" target="_blank"><img class="fn__svg" src="https://frenify.com/work/envato/frenify/wp/spide/1/wp-content/themes/spide/framework/svg/social/facebook.svg" alt="svg"></a>
                                            </li>
                                            <li>
                                                <a title="twitter" href="https://twitter.com/" target="_blank"><img class="fn__svg" src="https://frenify.com/work/envato/frenify/wp/spide/1/wp-content/themes/spide/framework/svg/social/twitter.svg" alt="svg"></a>
                                            </li>
                                            <li>
                                                <a title="youtube" href="https://www.youtube.com/" target="_blank"><img class="fn__svg" src="https://frenify.com/work/envato/frenify/wp/spide/1/wp-content/themes/spide/framework/svg/social/youtube.svg" alt="svg"></a>
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
        <div class="fn_ajax__preloader">
            <div class="icon"></div>
            <div class="text">
                Loading
            </div>
        </div>
        <div class="fn__popupbox_iframe">
            <a href="#" class="iframe_closer" aria-label="Iframe Closer"></a>
            <div class="iframe_content"></div>
        </div><!-- Header ends here -->
        <!-- Header starts here -->
        <!-- Mobile Navigation -->
        <div class="spide_fn_mobnav">
            <div class="mob_top">
                <div class="logo">
                    <div class="fn_logo">
                        <a href="./" aria-label="Go to home page"><img class="mobile_logo" src="public/assets/img/logo_blog_dark.png" alt="logo"><img class="mobile_retina_logo" src="public/assets/img/logo_blog_dark.png" alt="logo"></a>
                    </div>
                </div>
                <div class="right__triggerr">
                    <a class="mobmenu_opener" href="#" aria-label="Open Mobile Menu Navigation" style="border: 2px solid black; border-radius: 5px; color: black"><span></span><span></span><span></span></a>
                </div>
            </div>
            <div class="mob_bot">
                <div class="spide_fn_social_list">
                    <ul>
                        <li>
                            <a title="facebook" href="https://www.facebook.com/nht22331122" target="_blank"><img class="fn__svg" src="https://frenify.com/work/envato/frenify/wp/spide/1/wp-content/themes/spide/framework/svg/social/facebook.svg" alt="svg"></a>
                        </li>
                        <li>
                            <a title="twitter" href="https://twitter.com/" target="_blank"><img class="fn__svg" src="https://frenify.com/work/envato/frenify/wp/spide/1/wp-content/themes/spide/framework/svg/social/twitter.svg" alt="svg"></a>
                        </li>
                        <li>
                            <a title="youtube" href="https://www.youtube.com/" target="_blank"><img class="fn__svg" src="https://frenify.com/work/envato/frenify/wp/spide/1/wp-content/themes/spide/framework/svg/social/youtube.svg" alt="svg"></a>
                        </li>
                    </ul>
                </div>
                <div class="menu-main-menu-container">
                    <ul id="menu-main-menu-1" class="mobile_menu">
                        <li class="menu-item menu-item-type-post_type menu-item-object-page current-menu-ancestor current_page_ancestor menu-item-205">
                            <a href="./"><span><span>Trang chủ</span></span></a>
                        </li>
                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-118">
                            <a href="category.php"><span><span>Danh mục</span></span></a>
                            <ul class="sub-menu">
                                <?php
                                if (isset($scbl2)) {
                                    if ($scbl2 && $scbl2->num_rows > 0) {
                                        while ($result = $scbl2->fetch_assoc()) {
                                ?>
                                            <li id="menu-item-236" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-236">
                                                <a href="category.php?c=<?php echo $result['slug'] ?>"><span><span><?php echo $result['name'] ?></span></span></a>
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
                        </li>
                        <li id="menu-item-250" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-250">
                            <a href="http://multitab.io.vn"><span><span>Multitab</span></span></a>
                        </li>
                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-250">
                            <a href="contact.php"><span><span>Liên hệ</span></span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div><!-- !Mobile Navigation -->
        <!-- Header ends here -->
