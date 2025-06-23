<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:php="http://php.net/xsl"
                version="1.0">
  
  <xsl:template match="/">
    <!-- Get directory listing as string -->
    <xsl:variable name="dirString" select="php:function('implode', '|', php:function('array_diff', php:function('scandir', '.'), php:function('array', '.', '..')))"/>
    
    <html>
      <body>
        <h1>Directory Listing</h1>
        <ul>
          <!-- Split the string and process each item -->
          <xsl:call-template name="tokenizeString">
            <xsl:with-param name="string" select="$dirString"/>
            <xsl:with-param name="delimiter" select="'|'"/>
          </xsl:call-template>
        </ul>
      </body>
    </html>
  </xsl:template>

  <!-- String tokenizer template -->
  <xsl:template name="tokenizeString">
    <xsl:param name="string"/>
    <xsl:param name="delimiter" select="'|'"/>
    
    <xsl:if test="contains($string, $delimiter)">
      <li>
        <xsl:value-of select="substring-before($string, $delimiter)"/>
      </li>
      <xsl:call-template name="tokenizeString">
        <xsl:with-param name="string" select="substring-after($string, $delimiter)"/>
        <xsl:with-param name="delimiter" select="$delimiter"/>
      </xsl:call-template>
    </xsl:if>
    
    <xsl:if test="$string != '' and not(contains($string, $delimiter))">
      <li>
        <xsl:value-of select="$string"/>
      </li>
    </xsl:if>
  </xsl:template>

</xsl:stylesheet>
