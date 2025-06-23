function directoryListing($path) {
    $files = scandir($path);
    $xml = new SimpleXMLElement('<files/>');
    foreach ($files as $file) {
        if ($file != '.' && $file != '..') {
            $xml->addChild('file', $file);
        }
    }
    return $xml->asXML();
}

<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" 
                xmlns:php="http://php.net/xsl" 
                version="1.0">
  <xsl:template match="/">
    <xsl:variable name="filesXml" select="php:function('directoryListing', '.')"/>
    <html>
      <body>
        <h1>Directory Listing</h1>
        <ul>
          <xsl:for-each select="$filesXml/file">
            <li><xsl:value-of select="."/></li>
          </xsl:for-each>
        </ul>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
