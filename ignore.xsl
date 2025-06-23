<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:php="http://php.net/xsl"
  extension-element-prefixes="php">

  <xsl:template match="/">
    <html>
      <body>
        <h2>Directory Listing:</h2>
        <xsl:for-each select="php:function('scandir', '.')">
          <xsl:value-of select="." /><br/>
        </xsl:for-each>
      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>
