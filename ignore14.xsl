<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:php="http://php.net/xsl"
                version="1.0">
  
  <xsl:template match="/">
    <html>
      <body>
        <h1>Directory Listing</h1>
        <ul>
          <!-- Access array elements directly by index -->
          <xsl:variable name="fileCount" select="php:function('count', php:function('scandir', '.'))"/>
          
          <xsl:for-each select="1 to $fileCount">
            <xsl:variable name="file" select="php:function('scandir', '.')[current()]"/>
            <xsl:if test="$file != '.' and $file != '..'">
              <li><xsl:value-of select="$file"/></li>
            </xsl:if>
          </xsl:for-each>
        </ul>
      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>
