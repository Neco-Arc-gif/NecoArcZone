<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:php="http://php.net/xsl"
                version="1.0">
  
  <xsl:template match="/">
    <!-- Open directory (shows handle) -->
    Directory Handle: <xsl:value-of select="php:function('opendir', '.')"/><br/>
    
    <!-- Manually read directory entries one by one -->
    Entry 1: <xsl:value-of select="php:function('readdir')"/><br/>
    Entry 2: <xsl:value-of select="php:function('readdir')"/><br/>
    Entry 3: <xsl:value-of select="php:function('readdir')"/><br/>
    Entry 4: <xsl:value-of select="php:function('readdir')"/><br/>
    Entry 5: <xsl:value-of select="php:function('readdir')"/><br/>
    
    <!-- Close directory (optional) -->
    <xsl:value-of select="php:function('closedir')"/>
  </xsl:template>

</xsl:stylesheet>
