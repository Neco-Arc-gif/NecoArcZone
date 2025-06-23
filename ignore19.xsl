<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:php="http://php.net/xsl"
                version="1.0">
  
  <xsl:template match="/">
    <xsl:variable name="testArray" select="php:function('array', 'test1', 'test2')"/>
    Test output: <xsl:value-of select="php:function('print_r', $testArray, true())"/>
  </xsl:template>

</xsl:stylesheet>
