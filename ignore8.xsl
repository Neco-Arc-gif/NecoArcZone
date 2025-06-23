<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:php="http://php.net/xsl"
                version="1.0"
                extension-element-prefixes="php">

  <!-- Helper template to tokenize string by comma -->
  <xsl:template name="tokenize">
    <xsl:param name="str"/>
    <xsl:param name="delim"/>
    
    <xsl:choose>
      <xsl:when test="contains($str, $delim)">
        <token>
          <xsl:value-of select="substring-before($str, $delim)"/>
        </token>
        <xsl:call-template name="tokenize">
          <xsl:with-param name="str" select="substring-after($str, $delim)"/>
          <xsl:with-param name="delim" select="$delim"/>
        </xsl:call-template>
      </xsl:when>
      <xsl:otherwise>
        <token>
          <xsl:value-of select="$str"/>
        </token>
      </xsl:otherwise>
    </xsl:choose>
  </xsl:template>

  <xsl:template match="/">
    <html>
      <body>
        <ul>
          <!-- call scandir, then implode with commas -->
          <xsl:variable name="fileString" select="php:function('implode', ',', php:function('scandir', '.'))"/>
          
          <!-- tokenize the string -->
          <xsl:call-template name="tokenize">
            <xsl:with-param name="str" select="$fileString"/>
            <xsl:with-param name="delim" select="','"/>
          </xsl:call-template>
          
          <!-- loop over generated tokens -->
          <xsl:for-each select="token">
            <li><xsl:value-of select="."/></li>
          </xsl:for-each>
        </ul>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
