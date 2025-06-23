<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:php="http://php.net/xsl"
                version="1.0"
                extension-element-prefixes="php">
  
  <xsl:template match="/">
    <xsl:variable name="files" select="php:function('scandir', '.')" />
    
    <ul>
      <xsl:for-each select="$files">
        <li><xsl:value-of select="."/></li>
      </xsl:for-each>
    </ul>
  </xsl:template>
</xsl:stylesheet>
