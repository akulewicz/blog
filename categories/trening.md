---
layout: default
permalink: /trening/
---
<div class="posts">
        {%- for post in site.categories.trening -%}
        <article class="post">
                    <header class="post__header">
                        <a class="post__category" href="#">{{ post.categories }}</a>
                        <h2 class="post__title">{{ post.title }}</h2>
                        <p class="post__date">{{ post.date | date: "%d/%m/%Y" }}</p>
                        <div class="post__image-box">
                            <img class="post__image post__image--featured" src="../{{ post.image }}">
                        </div>
                    </header>
                    <p class="post__content">{{ post.intro }}</p>
                    <a class="post__link" href="{{ post.url | relative_url }}">Czytaj dalej</a>
                </article>
        {%- endfor -%}
</div>

{%- include paginator.html -%}