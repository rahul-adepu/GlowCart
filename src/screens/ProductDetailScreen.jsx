import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar, ScrollView } from 'react-native';

function Stars({ rating = 0, size = 16 }) {
  const full = Math.floor(rating);
  const stars = Array.from({ length: 5 }).map((_, i) => (i < full ? '★' : '☆'));
  return (
    <Text style={{ color: '#111', fontSize: size }}>
      {stars.join(' ')}
    </Text>
  );
}

export default function ProductDetailScreen({ navigation, route }) {
  const product = route?.params?.product || {};
  const imageUri = product.images?.[0] || product.thumbnail;
  const oldPrice = product.discountPercentage ? Number(product.discountPercentage).toFixed(2) : null;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFE9E6" />

      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        {/* Image with floating buttons */}
        <View style={styles.imageWrapper}>
          <Image source={{ uri: imageUri }} style={styles.image} />
          <TouchableOpacity style={[styles.fab, { left: 12 }]} onPress={() => navigation.goBack()}>
            <Text style={styles.fabIcon}>‹</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.fab, { right: 12 }]}>
            <Text style={styles.fabIcon}>⤴︎</Text>
          </TouchableOpacity>
        </View>

        {/* Badge row */}
        <View style={styles.badgeRow}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>View Similar</Text>
          </View>
          <Text style={styles.shareDot}>⋯</Text>
        </View>

        {/* Title & description */}
        <Text style={styles.title} numberOfLines={2}>{product.title}</Text>
        <Text style={styles.description}>
          {product.description}
        </Text>

        {/* Rating */}
        <View style={styles.ratingRow}>
          <Stars rating={product.rating} />
          <Text style={styles.ratingValue}>{String(product.rating || 0)}</Text>
        </View>

        {/* Sold by */}
        <View style={styles.soldRow}>
          <Text style={styles.soldBy}>Sold by : </Text>
          <Text style={styles.brand}>{product.brand || '—'}</Text>
        </View>

        {/* Price & CTA */}
        <View style={styles.priceRow}>
          <View>
            <Text style={styles.price}>${Number(product.price).toFixed(2)}</Text>
            {oldPrice && <Text style={styles.oldPrice}>${oldPrice}</Text>}
          </View>
          <TouchableOpacity style={styles.ctaButton}>
            <Text style={styles.ctaText}>Add to Bag</Text>
          </TouchableOpacity>
        </View>

        {/* Highlights */}
        <Text style={styles.sectionHeader}>Highlights</Text>
        <View style={styles.highlightsGrid}>
          <View style={styles.highlightCell}>
            <Text style={styles.highlightLabel}>Width</Text>
            <Text style={styles.highlightValue}>{product.dimensions?.width || product.width || '-'}{product.dimensions?.width ? '' : ''}</Text>
          </View>
          <View style={styles.dividerV} />
          <View style={styles.highlightCell}>
            <Text style={styles.highlightLabel}>Height</Text>
            <Text style={styles.highlightValue}>{product.dimensions?.height || product.height || '-'}</Text>
          </View>
        </View>
        <View style={styles.highlightsGrid}>
          <View style={styles.highlightCell}>
            <Text style={styles.highlightLabel}>Warranty</Text>
            <Text style={styles.highlightValue}>{product.warrantyInformation || '-'}</Text>
          </View>
          <View style={styles.dividerV} />
          <View style={styles.highlightCell}>
            <Text style={styles.highlightLabel}>Shipping</Text>
            <Text style={styles.highlightValue}>{product.shippingInformation || '-'}</Text>
          </View>
        </View>

        {/* Reviews */}
        {Array.isArray(product.reviews) && product.reviews.length > 0 && (
          <View style={styles.reviewsBlock}>
            <Text style={styles.sectionHeader}>Ratings & Reviews</Text>
            {product.reviews.slice(0, 2).map((r, idx) => (
              <View key={idx} style={styles.reviewCard}>
                <View style={styles.reviewHeader}>
                  <View style={styles.reviewAvatar} />
                  <View style={{ flex: 1 }}>
                    <Text style={styles.reviewerName}>{r.reviewerName}</Text>
                    <Text style={styles.reviewerEmail}>{r.reviewerEmail}</Text>
                  </View>
                  <Stars rating={r.rating} size={14} />
                </View>
                <Text style={styles.reviewComment}>{r.comment}</Text>
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFE9E6' },
  scroll: { paddingBottom: 24 },
  imageWrapper: {
    marginTop: 10,
    alignSelf: 'center',
    width: '90%',
    aspectRatio: 1,
    borderRadius: 18,
    overflow: 'hidden',
    backgroundColor: '#F3F3F3',
  },
  image: { width: '100%', height: '100%' },
  fab: {
    position: 'absolute',
    top: 10,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  fabIcon: { fontSize: 20, color: '#111' },
  badgeRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 18, marginTop: 10 },
  badge: { backgroundColor: '#FFFFFF', borderRadius: 16, paddingHorizontal: 12, paddingVertical: 6 },
  badgeText: { color: '#B84953', fontWeight: '600', fontSize: 12 },
  shareDot: { fontSize: 18, color: '#6F6F6F' },
  title: { paddingHorizontal: 18, marginTop: 8, fontSize: 18, fontWeight: '700', color: '#111111' },
  description: { paddingHorizontal: 18, marginTop: 6, fontSize: 13, color: '#6F6F6F', lineHeight: 18 },
  ratingRow: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 18, marginTop: 8 },
  ratingValue: { marginLeft: 8, color: '#111', fontSize: 13 },
  soldRow: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 18, marginTop: 10 },
  soldBy: { color: '#6F6F6F', fontSize: 13 },
  brand: { color: '#111', fontWeight: '600', fontSize: 13 },
  priceRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 18, marginTop: 12 },
  price: { fontSize: 28, fontWeight: '800', color: '#111' },
  oldPrice: { marginTop: 4, color: '#9E9E9E', textDecorationLine: 'line-through', fontSize: 16 },
  ctaButton: { backgroundColor: '#B84953', paddingHorizontal: 22, paddingVertical: 14, borderRadius: 12 },
  ctaText: { color: '#FFFFFF', fontSize: 16, fontWeight: '700' },

  sectionHeader: { paddingHorizontal: 18, marginTop: 18, marginBottom: 10, fontSize: 16, fontWeight: '700', color: '#111' },
  highlightsGrid: { flexDirection: 'row', alignItems: 'stretch', backgroundColor: '#FFFFFF', marginHorizontal: 18, borderRadius: 12, padding: 14, marginBottom: 10 },
  dividerV: { width: 1, backgroundColor: '#EFEFEF', marginHorizontal: 12 },
  highlightCell: { flex: 1 },
  highlightLabel: { color: '#6F6F6F', fontSize: 13, marginBottom: 6 },
  highlightValue: { color: '#111', fontSize: 14 },

  reviewsBlock: { paddingBottom: 20 },
  reviewCard: { backgroundColor: '#FFFFFF', marginHorizontal: 18, borderRadius: 12, padding: 14, marginBottom: 12 },
  reviewHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  reviewAvatar: { width: 32, height: 32, borderRadius: 16, backgroundColor: '#E0E0E0', marginRight: 10 },
  reviewerName: { fontSize: 14, color: '#111111', fontWeight: '600' },
  reviewerEmail: { fontSize: 12, color: '#8B8B8B' },
  reviewComment: { color: '#111', fontSize: 13 },
});
