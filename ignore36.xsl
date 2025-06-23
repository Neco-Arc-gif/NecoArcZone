<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:php="http://php.net/xsl"
                version="1.0">
  
  <xsl:template match="/">
    <!-- Get directory handle -->
    <xsl:variable name="dirHandle" select="php:function('opendir', '.')"/>
    
    <html>
      <body>
        <h1>Directory Listing</h1>
        <pre>
          <!-- Read a fixed number of entries (adjust as needed) -->
          Entry 1: <xsl:value-of select="php:function('readdir', $dirHandle)"/><br/>
          Entry 2: <xsl:value-of select="php:function('readdir', $dirHandle)"/><br/>
          Entry 3: <xsl:value-of select="php:function('readdir', $dirHandle)"/><br/>
          <!-- Remember to close the directory -->
          <xsl:value-of select="php:function('closedir', $dirHandle)"/>
        </pre>
      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>
