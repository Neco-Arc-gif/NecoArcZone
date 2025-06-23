<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:php="http://php.net/xsl"
                version="1.0">
  <xsl:template match="/">
    <!-- First get the array -->
    <xsl:variable name="filesArray" select="php:function('scandir', '.')"/>
    
    <!-- Then process it using PHP's array functions -->
    <html>
      <body>
        <h1>Directory Listing</h1>
        <ul>
          <!-- Filter out . and .. -->
          <xsl:variable name="filteredArray" select="php:function('array_diff', $filesArray, php:function('array', '.', '..'))"/>
          
          <!-- Get array keys to iterate -->
          <xsl:variable name="keys" select="php:function('array_keys', $filteredArray)"/>
          
          <xsl:for-each select="$keys">
            <xsl:variable name="index" select="."/>
            <li>
              <xsl:value-of select="php:function('array_values', $filteredArray)[number($index)+1]"/>
            </li>
          </xsl:for-each>
        </ul>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
