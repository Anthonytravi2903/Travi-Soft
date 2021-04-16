        <?php while( have_posts()): the_post();?>
                <h1 class="texto-primario text-center"><?php the_title()?></h1>

                <?php 
                        if(has_post_thumbnail() ):
                        the_post_thumbnail('blog', array('class' => 'imagen-destacada'));
                        endif;
                        ?>

                        <?php
                                //Revisar si el custom post type es clases
                                if(get_post_type() ==='gymfitness_clases'){
                                        $info_servicio = get_field('info_servicio');
                                
                        ?>
                                        <p class="informacion-clase"><?php echo $info_servicio ;?></p>
                        <?php } ?>

                <?php the_content() ?>
                <?php endwhile;   ?>