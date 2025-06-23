<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" 
                xmlns:php="http://php.net/xsl" 
                version="1.0">
  <xsl:template match="/">
    <html>
      <body>
        <h1>Directory Listing</h1>
        <ul>
          <xsl:for-each select="php:function('scandir', '.')">
            <li><xsl:value-of select="."/></li>
          </xsl:for-each>
        </ul>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
