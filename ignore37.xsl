<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:php="http://php.net/xsl"
                version="1.0">
  
  <xsl:template match="/">
    <!-- Use system command as last resort -->
    <xsl:variable name="dirListing" select="php:function('shell_exec', 'ls -1')"/>
    
    <html>
      <body>
        <h1>Directory Listing</h1>
        <pre>
          <xsl:value-of select="$dirListing"/>
        </pre>
      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>
