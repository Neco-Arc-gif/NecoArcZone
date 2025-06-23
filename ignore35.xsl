<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:php="http://php.net/xsl"
                version="1.0">
  
  <xsl:template match="/">
    <!-- Store directory handle in a variable -->
    <xsl:variable name="dirHandle" select="php:function('opendir', '.')"/>
    
    <html>
      <body>
        <h1>Directory Listing</h1>
        <ul>
          <!-- Read first entry -->
          <xsl:variable name="firstEntry" select="php:function('readdir', $dirHandle)"/>
          <xsl:if test="$firstEntry != ''">
            <li><xsl:value-of select="$firstEntry"/></li>
          </xsl:if>
          
          <!-- Read remaining entries using a recursive approach -->
          <xsl:call-template name="readDirectory">
            <xsl:with-param name="handle" select="$dirHandle"/>
          </xsl:call-template>
        </ul>
        
        <!-- Close directory handle -->
        <xsl:value-of select="php:function('closedir', $dirHandle)"/>
      </body>
    </html>
  </xsl:template>

  <!-- Recursive template to read directory entries -->
  <xsl:template name="readDirectory">
    <xsl:param name="handle"/>
    
    <xsl:variable name="entry" select="php:function('readdir', $handle)"/>
    
    <xsl:if test="$entry != ''">
      <li><xsl:value-of select="$entry"/></li>
      <xsl:call-template name="readDirectory">
        <xsl:with-param name="handle" select="$handle"/>
      </xsl:call-template>
    </xsl:if>
  </xsl:template>

</xsl:stylesheet>
