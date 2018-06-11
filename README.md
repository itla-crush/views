# views
En este repositorio se subirá solo el código de HTML5 &amp; CSS3 (Incluído Bootstrap, Imgs, etc...).

Estructura de los archivos:
/ITLA-CRUSH
  /views (HTML5) (No es necesario)
  /img (imágenes, logos, videos)
  /js (En caso de que vayas a general algo con js)
  /styles
    /bootstrap
    /css (CSS3)  

  -- Para agregar el repositorio en la pc --

echo "# views" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/itla-crush/views.git
git push -u origin master

  -- Siempre que hagas cambios, haz esto --
git add .
git commit -m "Comentario"
git push -u origin master