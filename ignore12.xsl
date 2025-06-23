<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" 
                xmlns:php="http://php.net/xsl" 
                xmlns:str="http://exslt.org/strings"
                extension-element-prefixes="str"
                version="1.0">
  <xsl:template match="/">
    <!-- Convert array to string and split -->
    <xsl:variable name="filesStr" select="php:function('implode', ',', php:function('scandir', '.'))"/>
    <html>
      <body>
        <h1>Directory Listing</h1>
        <ul>
          <xsl:for-each select="str:tokenize($filesStr, ',')">
            <xsl:if test=". != '.' and . != '..'">
              <li><xsl:value-of select="."/></li>
            </xsl:if>
          </xsl:for-each>
        </ul>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
