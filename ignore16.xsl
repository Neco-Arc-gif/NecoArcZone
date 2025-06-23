<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:php="http://php.net/xsl"
                version="1.0">
  
  <xsl:template match="/">
    <!-- Get the array -->
    <xsl:variable name="files" select="php:function('scandir', '.')"/>
    
    <!-- Display values manually by index -->
    <html>
      <body>
        <h1>Directory Listing</h1>
        <ul>
          <!-- Access each element by its 0-based index -->
          <li>File 0: <xsl:value-of select="$files[1]"/></li>
          <li>File 1: <xsl:value-of select="$files[2]"/></li>
          <li>File 2: <xsl:value-of select="$files[3]"/></li>
          <!-- Continue for as many elements as you expect -->
        </ul>
      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>
