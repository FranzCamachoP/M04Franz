<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html" encoding="UTF-8" indent="yes"/>

    <xsl:template match="/">
        <html>
            <head>
                <title>Lista de Recetas</title>
                <link rel="stylesheet" href="../css/estilo.css"/>
            </head>
            <body>
                <header>
                    <img src="../img/Logo-Delicias.png" alt="Delicias Kitchen"/>
                    <nav>
                        <ul>
                            <li><a href="index.html">Inicio</a></li>
                            <li><a href="en_construccion.html">Sobre mí</a></li>
                            <li><a href="llista_receptes.html">Recetas</a></li>
                            <li><a href="contacte.html">Contacto</a></li>
                            <li><a href="en_construccion.html">Otras cosas</a></li>
                        </ul>
                    </nav>
                </header>

                <main>
                    <h1>Lista de Recetas</h1>
                    <div class="listado">
                        <xsl:for-each select="recetas/receta">
                            <article>
                                <h3><xsl:value-of select="titulo"/></h3>
                                <p>Tiempo: <xsl:value-of select="tiempo"/></p>
                                <p>Dificultad: <xsl:value-of select="dificultad"/></p>
                                <img src="../img/{imagen}" alt="{titulo}"/>
                                <p><xsl:value-of select="descripcion"/></p>
                            </article>
                        </xsl:for-each>
                    </div>
                </main>

                <footer>
                    <div class="footer-links">
                        <a href="en_construccion.html">FACEBOOK</a>
                        <a href="en_construccion.html">TWITTER</a>
                        <a href="en_construccion.html">INSTAGRAM</a>
                        <a href="en_construccion.html">PINTEREST</a>
                        <a href="en_construccion.html">EMAIL</a>
                        <a href="en_construccion.html">RSS</a>
                    </div>
                </footer>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
