
<footer class="site-footer contenedor">
        <div class="boton-w">
        <a href="https://api.whatsapp.com/send?phone=51994355393&text=&source=&data=&app_absent=">
            <img src="<?php echo get_template_directory_uri(); ?>\img\icons\whatsapp.svg" alt="Contáctame">
        </a>
        </div>
        <hr>
        <div class="contenido-footer">

        <?php
                $args = array(
                        'theme_location' => 'menu-principal',
                        'container' => 'nav',
                        'container_class' => 'menu-principal'
                );
                    wp_nav_menu($args);
            ?>
            <p class="copyright">Todos los derechos reservados. <?php echo get_bloginfo('name') . " " . date('Y'); ?> </p>
        </div>
</footer>

    <?php wp_footer(); ?>
</body>
</html>