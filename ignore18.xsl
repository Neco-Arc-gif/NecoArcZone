<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:php="http://php.net/xsl"
                version="1.0">
  
  <xsl:template match="/">
    <!-- Get directory contents as newline-separated string -->
    <xsl:variable name="dirContents" select="php:function('implode', '&#10;', php:function('scandir', '.'))"/>
    
    <html>
      <body>
        <h1>Directory Listing</h1>
        <pre>
          <xsl:value-of select="$dirContents"/>
        </pre>
      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>
